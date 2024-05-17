const express = require('express');
const { loginUser, getLoggInPage, createUser, getCreateUser, getHomePage,
} = require('../controlers/controler');
const { upload } = require('../midleware/midleware')
const router = express.Router();
//-------------------------------------
//
router.get('/home', getHomePage)
router.get('/login', getLoggInPage)
router.post('/login', loginUser)
router.get('/getCreateUser', getCreateUser)
// router.post('/createUser', createUser)
router.post('/createUser', upload.single('avatar'), createUser)




module.exports = router;