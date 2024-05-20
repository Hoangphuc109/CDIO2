const { json } = require('express');

const { getAllcontact, getContactById,
    //create
    queryCreateContact,
    //delete
    deleteContactrById,
    //update
    queryUpdateContact,
    //===========================================================
} = require('../services/contact')

const getContact = async (req, res) => {
    let results = await getAllcontact();
    return res.json({ Contact: results })
}


const getContactId = async (req, res) => {
    try {
        const contactId = req.params.id;
        let contact = await getContactById(contactId);
        if (contact) {
            res.json({ contact });
        } else {
            res.status(404).json({ error: 'Contact not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


//function
const createContact = async (req, res) => {
    let { id, name, logo, email, hotline, address, description, active } = req.body;
    await queryCreateContact(id, name, logo, email, hotline, address, description, active)
    res.send('tao duoc roi')
    //=====>đưa ra chuỗi 

};

//delete

const deleteContact = async (req, res) => {
    const contactid = req.params.id;
    await deleteContactrById(contactid);
    // res.redirect('/home')
    let results = await getAllcontact();
    return res.json({ contact: results });
    //=> xóa đưa ra chuỗi 
};


//update


const updateContact = async (req, res) => {
    let { id, name, logo, email, hotline, address, description, active } = req.body;
    try {
        await queryUpdateContact(id, name, logo, email, hotline, address, description, active);
        return res.send('ok baby');
    } catch (error) {
        console.error('Error updating post:', error);
        return res.status(500).send('Internal Server Error');
    }
};

// avatar, address,email_verified_at,remember_token,created_at,updated_at,
module.exports = {
    //get
    getContact, getContactId,
    //create
    createContact,
    //delete
    deleteContact,
    //update
    updateContact,
};