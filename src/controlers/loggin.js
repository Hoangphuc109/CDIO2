const { json } = require('express');

const { getUserByUsernameAndPassword,
    //===========================================================
} = require('../services/loggin')


//function
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



// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    //get
    getLoggInPage,
    //loggin
    loginUser,

};