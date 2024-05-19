const connection = require('../config/database');
const queryGetAllInvoiceDetails = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`InvoiceDetails`;');
    return results;
};

const queryCreateInvoiceDetail = async (idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`InvoiceDetails` (`idInvoice`, `idProduct`, `nameProduct`, `quantity`, `price`, `urlImage`, `Invoice_idInvoice`, `Product_idProduct`) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct]
    );
    return results;
};

const queryUpdateInvoiceDetail = async (idInvoiceDetails, idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`InvoiceDetails` SET `idInvoice` = ?, `idProduct` = ?, `nameProduct` = ?, `quantity` = ?, `price` = ?, `urlImage` = ?, `Invoice_idInvoice` = ?, `Product_idProduct` = ? WHERE `idInvoiceDetails` = ?',
        [idInvoice, idProduct, nameProduct, quantity, price, urlImage, Invoice_idInvoice, Product_idProduct, idInvoiceDetails]
    );
    return results;
};

const queryDeleteInvoiceDetail = async (idInvoiceDetails) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`InvoiceDetails` WHERE `idInvoiceDetails` = ?',
        [idInvoiceDetails]
    );
    return results;
};

module.exports = {
    queryGetAllInvoiceDetails,
    queryCreateInvoiceDetail,
    queryUpdateInvoiceDetail,
    queryDeleteInvoiceDetail
};