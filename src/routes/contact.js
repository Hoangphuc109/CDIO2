const express = require('express');
const { //get
    //get
    getContact, getContactId,
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

router.get('/:id', getContactId);
//create

router.post('/createContact', createContact)

//delete

router.delete('/deleteContact/:id', deleteContact)
//update

router.put('/updateContact', updateContact)








module.exports = router;