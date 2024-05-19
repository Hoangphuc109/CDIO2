const { json } = require('express');

const { getAllcontact,
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
    getContact,
    //create
    createContact,
    //delete
    deleteContact,
    //update
    updateContact,
};