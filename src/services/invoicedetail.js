const connection = require('../config/database');
const queryGetAllInvoiceDetails = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`InvoiceDetails`;');
    return results;
};

const queryCreateInvoiceDetail = async (idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`InvoiceDetails` (`idInvoiceDetails`,`idInvoice`, `idProduct`, `nameProduct`, `quanity`, `price`, `urlImage`, `Invoice_idInvoice`, `Product_idProduct`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct]
    );
    return results;
};

const queryUpdateInvoiceDetail = async (idInvoiceDetails, idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct) => {

    let query = 'UPDATE `rice_4_man`.`InvoiceDetails` SET `idInvoice` = ?, `idProduct` = ?, `nameProduct` = ?, `quanity` = ?, `price` = ?, `Invoice_idInvoice` = ?, `Product_idProduct` = ? WHERE `idInvoiceDetails` = ?';
    let params = [idInvoice, idProduct, nameProduct, quanity, price, Invoice_idInvoice, Product_idProduct, idInvoiceDetails];
    if (urlImage) {
        query = 'UPDATE `rice_4_man`.`InvoiceDetails` SET `idInvoice` = ?, `idProduct` = ?, `nameProduct` = ?, `quanity` = ?, `price` = ?, `urlImage` = ?, `Invoice_idInvoice` = ?, `Product_idProduct` = ? WHERE `idInvoiceDetails` = ?';
        params = [idInvoice, idProduct, nameProduct, quanity, price, urlImage, Invoice_idInvoice, Product_idProduct, idInvoiceDetails];

    }
    let [results, fields] = await connection.query(query, params);
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