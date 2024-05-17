const { json } = require('express');

const { getUserByUsernameAndPassword, getallusers, queryCreateUser,
    //===========================================================
} = require('../services/sevice')
const multer = require('multer');


const getHomePage = async (req, res) => {
    let results = await getallusers();
    return res.render('home.ejs', { ListEmployee: results })
}

const getLoggInPage = (req, res) => {

    return res.render('loggin.ejs')
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await getUserByUsernameAndPassword(username, password);
        if (user) {
            if (user.role === 1) {
                // Redirect to admin account page
                res.render('admin_home.ejs');
            } else if (user.role === 0) {
                // Redirect to customer account page
                res.render('customer_home.ejs');
            } else {
                res.status(403).json({ message: 'Unauthorized role' });
            }
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getCreateUser = (req, res) => {
    res.render('create.ejs')
}

const createUser = async (req, res) => {
    let { id, name, email, phone, role, active, password, address, email_verified_at, remember_token, created_at, updated_at, } = req.body;
    let avatar = req.file ? req.file.filename : '';
    await queryCreateUser(id, name, email, phone, avatar, address, role, active, password, email_verified_at, remember_token, created_at, updated_at)
    let results = await getallusers();
    return res.json({ ListEmployee: results });
    //=====>đưa ra chuỗi 

};



// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    loginUser, getLoggInPage, createUser, getCreateUser, getHomePage,
};