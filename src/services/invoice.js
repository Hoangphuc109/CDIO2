const connection = require('../config/database');

// Invoice queries
const queryGetAllInvoices = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`Invoice`;');
    return results;
};

const queryCreateInvoice = async (idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`Invoice` (`idInvoice`, `idUser`, `total`, `purchaseDate`, `payment`, `state`, `isDone`, `userName`, `email`, `phoneNumber`, `address`, `users_id`) VALUES (?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id]
    );
    return results;
};

const queryUpdateInvoice = async (idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`Invoice` SET `idUser` = ?, `total` = ?, `payment` = ?, `state` = ?, `isDone` = ?, `userName` = ?, `email` = ?, `phoneNumber` = ?, `address` = ?, `users_id` = ?, `purchaseDate` = CURRENT_TIMESTAMP WHERE `idInvoice` = ?',
        [idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id, idInvoice]
    );
    return results;
};

const queryDeleteInvoice = async (idInvoice) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`Invoice` WHERE `idInvoice` = ?',
        [idInvoice]
    );
    return results;
};
module.exports = {
    queryGetAllInvoices,
    queryCreateInvoice,
    queryUpdateInvoice,
    queryDeleteInvoice,
};