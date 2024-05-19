const {
    queryGetAllInvoiceDetails,
    queryCreateInvoiceDetail,
    queryUpdateInvoiceDetail,
    queryDeleteInvoiceDetail
} = require('../services/invoicedetail');
const getAllInvoiceDetails = async (req, res) => {
    try {
        let results = await queryGetAllInvoiceDetails();
        return res.json({ invoiceDetails: results });
    } catch (error) {
        console.error('Error fetching invoice details:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const createInvoiceDetail = async (req, res) => {
    let { idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct } = req.body;
    try {
        await queryCreateInvoiceDetail(idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct);
        return res.send('Invoice detail created successfully');
    } catch (error) {
        console.error('Error creating invoice detail:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const updateInvoiceDetail = async (req, res) => {
    let { idInvoiceDetails, idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct } = req.body;
    try {
        await queryUpdateInvoiceDetail(idInvoiceDetails, idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct);
        return res.send('Invoice detail updated successfully');
    } catch (error) {
        console.error('Error updating invoice detail:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const deleteInvoiceDetail = async (req, res) => {
    const idInvoiceDetails = req.params.id;
    try {
        await queryDeleteInvoiceDetail(idInvoiceDetails);
        return res.send('Invoice detail deleted successfully');
    } catch (error) {
        console.error('Error deleting invoice detail:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
};