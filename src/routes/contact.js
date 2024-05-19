const express = require('express');
const { //get
    //get
    getContact,
    //create
    createContact,
    //delete
    deleteContact,
    //update
    updateContact,
} = require('../controlers/contact');
const router = express.Router();
//-------------------------------------

router.get('/', getContact)
//create

router.post('/createContact', createContact)

//delete

router.delete('/deleteContact/:id', deleteContact)
//update

router.put('/updateContact', updateContact)








module.exports = router;