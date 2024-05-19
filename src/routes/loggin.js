const express = require('express');
const {
    getLoggInPage,
    //loggin
    loginUser,

} = require('../controlers/loggin');
const router = express.Router();
//-------------------------------------
//

router.post('/', getLoggInPage)

router.post('/login', loginUser)


module.exports = router;