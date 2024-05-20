const connection = require('../config/database')
//get

const getAllcontact = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`contact`;')
    return results
}

const getContactById = async (id) => {
    try {
        let [results, fields] = await connection.query('SELECT * FROM `contact` WHERE id = ?', [id]);
        return results[0];
    } catch (error) {
        console.error('Database query failed: ', error);
        throw error;
    }
};

//create


const queryCreateContact = async (id, name, logo, email, hotline, address, description, active) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`contact` (`id`, `name`, `logo`, `email`, `hotline`, `address`, `description`, `active`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
        [id, name, logo, email, hotline, address, description, active]
    );
    return results;
}


//delete

const deleteContactrById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`contact`WHERE `id` = ?;',
        [id]
    )
}

//update

const queryUpdateContact = async (id, name, logo, email, hotline, address, description, active, updated_at) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`contact` SET `name` = ?, `logo` = ?, `email` = ?, `hotline` = ?, `address` = ?, `description` = ?, `active` = ?, `updated_at` = CURRENT_TIMESTAMP WHERE `id` = ?',
        [name, logo, email, hotline, address, description, active, id]
    );
    return results;
}

module.exports = {
    //get
    getAllcontact, getContactById,
    //create
    queryCreateContact,
    //delete
    deleteContactrById,
    //update
    queryUpdateContact,
}