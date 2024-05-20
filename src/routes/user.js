const express = require('express');
const { //get
    getUser, getUserId,

    //  function create
    createUser,
    //delete
    deleteUser,
    //update
    updateUserById,
} = require('../controlers/user');
const { upload } = require('../midleware/midleware')
const router = express.Router();
//-------------------------------------

router.get('/', getUser)

router.get('/:id', getUserId)


router.post('/createUser', upload.single('avatar'), createUser)


//delete

router.delete('/deleteUser/:id', deleteUser)
//update

router.put('/updateUser', upload.single('avatar'), updateUserById)









module.exports = router;