const {
    queryGetAllInvoiceDetails, getInvoiceDetailssById,
    queryCreateInvoiceDetail,
    queryUpdateInvoiceDetail,
    queryDeleteInvoiceDetail
} = require('../services/invoicedetail');
const getAllInvoiceDetails = async (req, res) => {
    try {
        let results = await queryGetAllInvoiceDetails();
        return res.json({ invoiceDetails: results });
        // return res.render('createtestivdt')
    } catch (error) {
        console.error('Error fetching invoice details:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const getInvoiceDetailsId = async (req, res) => {
    const InvoiceDetailsid = req.params.id;
    let InvoiceDetails = await getInvoiceDetailssById(InvoiceDetailsid);
    return res.json({ InvoiceDetails })
}

const createInvoiceDetail = async (req, res) => {
    let { idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, Invoice_idInvoice, Product_idProduct } = req.body;
    let urlImage = req.file ? req.file.filename : '';

    try {
        await queryCreateInvoiceDetail(idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct);
        return res.send('Invoice detail created successfully');
    } catch (error) {
        console.error('Error creating invoice detail:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const updateInvoiceDetail = async (req, res) => {
    let { idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, Invoice_idInvoice, Product_idProduct } = req.body;
    let urlImage = req.file ? req.file.filename : '';
    try {
        await queryUpdateInvoiceDetail(idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct);
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
    getAllInvoiceDetails, getInvoiceDetailsId,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
};