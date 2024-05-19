const express = require('express');
const {
    getLoggInPage,
    //loggin
    loginUser,

} = require('../controlers/loggin');
const router = express.Router();
//-------------------------------------
//

router.get('/', getLoggInPage)

router.post('/loginUser', loginUser)


module.exports = router;