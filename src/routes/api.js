const express = require('express');
const { //get
    getLoggInPage, getCreateUser, getHomePage, getUser, getUserId,
    getPost, getContact,
    //loggin
    loginUser,
    //  function create
    createUser,
    //delete
    deleteUser,
    //update
    updateUserById, updatePost, updateContact,
} = require('../controlers/controler');
const { upload } = require('../midleware/midleware')
const router = express.Router();
//-------------------------------------
//
router.get('/home', getHomePage)
router.get('/posts', getPost)
router.get('/contact', getContact)
router.get('/userList', getUser)
router.get('/login', getLoggInPage)
router.post('/login', loginUser)
router.get('/getCreateUser', getCreateUser)
// router.post('/createUser', createUser)
router.post('/createUser', upload.single('avatar'), createUser)
//delete
router.post('/deleteUser/:id', getUserId)
router.post('/deleteUser', deleteUser)
//update
router.post('/updateUser/:id', getUserId)
router.post('/updateUser', upload.single('avatar'), updateUserById)
router.post('/updatePost', updatePost)
router.post('/updateContact', updateContact)








module.exports = router;