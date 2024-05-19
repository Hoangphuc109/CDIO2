const { json } = require('express');

const { getallusers,

    //create
    queryCreateUser,
    //delete
    deleteUserById,
    //update
    queryUpdateUser
    //===========================================================
} = require('../services/user')

const getUser = async (req, res) => {
    let results = await getallusers();
    // return res.render('userList.ejs', { ListEmployee: results })
    return res.json({ user: results })

}
//function



const createUser = async (req, res) => {
    let { id, name, email, phone, role, active, password, address, remember_token, } = req.body;
    let avatar = req.file ? req.file.filename : '';
    await queryCreateUser(id, name, email, phone, avatar, address, role, active, password, remember_token,)
    // res.redirect('/userList')
    res.send('ok nuon')
    //=====>đưa ra chuỗi 

};



//delete
const deleteUser = async (req, res) => {
    const userid = req.params.id;
    await deleteUserById(userid);
    // res.redirect('/home')
    let results = await getallusers();
    return res.json({ userDelete: results });
    //=> xóa đưa ra chuỗi 
};



//update
const updateUserById = async (req, res) => {
    let { id, name, email, phone, role, active, password, address, email_verified_at, remember_token, created_at, updated_at, } = req.body;
    let avatar = req.file ? req.file.filename : '';
    await queryUpdateUser(id, name, email, phone, avatar, address, role, active, password, email_verified_at, remember_token, created_at, updated_at)
    // res.redirect('/userList')
    return res.send('ok baby')

};


// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    //get
    getUser,
    //  function create
    createUser,
    //delete
    deleteUser,
    //update
    updateUserById,
};