const { json } = require('express');

const { getUserByUsernameAndPassword, getallusers, getUserById,
    getAllPosts, getAllcontact,
    //create
    queryCreateUser, queryCreatePosts, queryCreateContact,
    //delete
    deleteUserById, deletePostById, deleteContactrById,
    //update
    queryUpdateUser, queryUpdatePost, queryUpdateContact,
    //===========================================================
} = require('../services/sevice')
const multer = require('multer');


const getHomePage = async (req, res) => {
    return res.render('home.ejs')
}

const getUser = async (req, res) => {
    let results = await getallusers();
    // return res.render('userList.ejs', { ListEmployee: results })
    return res.json({ ListEmployee: results })

}

const getPost = async (req, res) => {
    let results = await getAllPosts();
    return res.json({ ListEmployee: results })
}

const getContact = async (req, res) => {
    let results = await getAllcontact();
    return res.json({ ListEmployee: results })
}

const getUserId = async (req, res) => {
    const userid = req.params.id;
    let user = await getUserById(userid);
    // res.render('deleteUser.ejs', { user })
    res.render('edit.ejs', { user })

}

const getLoggInPage = (req, res) => {

    return res.render('loggin.ejs')
}

const getCreateUser = (req, res) => {
    res.render('createUser.ejs')
}



//function

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

const createUser = async (req, res) => {
    let { id, name, email, phone, role, active, password, address, remember_token, } = req.body;
    let avatar = req.file ? req.file.filename : '';
    await queryCreateUser(id, name, email, phone, avatar, address, role, active, password, remember_token,)
    // res.redirect('/userList')
    res.send('ok nuon')
    //=====>đưa ra chuỗi 

};

const createPosts = async (req, res) => {
    let { idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug } = req.body;
    await queryCreatePosts(idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug)
    res.redirect('/userList')
    //=====>đưa ra chuỗi 

};

const createContact = async (req, res) => {
    let { id, name, logo, email, hotline, address, description, active } = req.body;
    await queryCreateContact(id, name, logo, email, hotline, address, description, active)
    res.redirect('/userList')
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

const deletePosts = async (req, res) => {
    const postid = req.body.id;
    await deleteUserById(postid);
    // res.redirect('/home')
    let results = await getallusers();
    return res.json({ post: results });
    //=> xóa đưa ra chuỗi 
};

const deleteContact = async (req, res) => {
    const contactid = req.body.id;
    await deleteUserById(contactid);
    // res.redirect('/home')
    let results = await getallusers();
    return res.json({ contact: results });
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
const updatePost = async () => {
    try {
        const {
            idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug
        } = req.body;
        const result = await queryUpdatePost(idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug);
        let results = await getAllPosts();
        return res.json({ posts: results })
    } catch (error) {
        console.error('Error updating post:', error);
    }
};
const updateContact = async () => {
    try {
        let {
            id, name, logo, email, hotline, address, description, active
        } = req.body;
        let result = await queryUpdateContact(id, name, logo, email, hotline, address, description, active);
        let results = await getAllPosts();
        return res.json({ contact: results })
    } catch (error) {
        console.error('Error updating contact:', error);
    }
};


// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    //get
    getLoggInPage, getCreateUser, getHomePage, getUser, getUserId,
    getPost, getContact,
    //loggin
    loginUser,
    //  function create
    createUser, createPosts, createContact,
    //delete
    deleteUser, deletePosts, deleteContact,
    //update
    updateUserById, updatePost, updateContact,
};