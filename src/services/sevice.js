const connection = require('../config/database')
//get
const getUserByUsernameAndPassword = async (username, password) => {
    try {
        let [results, fields] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password])
        let user = results && results.length > 0 ? results[0] : {};
        return user
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};

const getallusers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`users`;')
    return results
}

const getAllPosts = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`posts`;')
    return results
}

const getAllcontact = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`contact`;')
    return results
}

const getUserById = async (id) => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`users` WHERE `id` = ?;', [id])
    let user = results && results.length > 0 ? results[0] : {};
    return user
}

//create
const queryCreateUser = async (id, name, email, phone, avatar, address, role, active, password, remember_token,) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`users` (`id`, `name`, `email`, `phone`,`avatar`,`address`, `role`, `active`, `password`,`email_verified_at`,`remember_token`,`created_at`,`updated_at` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
        [id, name, email, phone, avatar, address, role, active, password, remember_token,],
    );
}

const queryCreatePosts = async (idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`Posts` (`idPosts`, `thumbNail`, `content`, `author`, `postingDate`, `anHien`, `noiBat`, `title`, `slug`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug]
    );
    return results;
}


const queryCreateContact = async (id, name, logo, email, hotline, address, description, active) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`contact` (`id`, `name`, `logo`, `email`, `hotline`, `address`, `description`, `active`, `created_at`, `updated_at`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
        [id, name, logo, email, hotline, address, description, active]
    );
    return results;
}


//delete
const deleteUserById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`users`WHERE `id` = ?;',
        [id]
    )
}

const deletePostById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`posts`WHERE `idPots` = ?;',
        [id]
    )
}

const deleteContactrById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`contact`WHERE `id` = ?;',
        [id]
    )
}

//update
const queryUpdateUser = async (id, name, email, phone, avatar, address, role, active, password, remember_token,) => {

    let query = 'UPDATE `rice_4_man`.`users` SET `name` = ?, `email` = ?, `phone` = ?, `address` = ?, `role` = ?, `active` = ?, `password` = ?, `email_verified_at` = CURRENT_TIMESTAMP, `remember_token` = ?, `created_at` = CURRENT_TIMESTAMP, `updated_at` = CURRENT_TIMESTAMP WHERE `id` = ?';
    let params = [name, email, phone, address, role, active, password, remember_token, id];

    if (avatar) {
        query = 'UPDATE `rice_4_man`.`users` SET `name` = ?, `email` = ?, `phone` = ?, `avatar` = ?, `address` = ?, `role` = ?, `active` = ?, `password` = ?, `email_verified_at` = CURRENT_TIMESTAMP, `remember_token` = ?, `created_at` = CURRENT_TIMESTAMP, `updated_at` = CURRENT_TIMESTAMP WHERE `id` = ?';
        params = [name, email, phone, avatar, address, role, active, password, remember_token, id];
    }

    let [results, fields] = await connection.query(query, params);
    return results;

}
const queryUpdatePost = async (idPosts, thumbNail, content, author, postingDate, anHien, noiBat, title, slug) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`Posts` SET `thumbNail` = ?, `content` = ?, `author` = ?, `postingDate` = ?, `anHien` = ?, `noiBat` = ?, `title` = ?, `slug` = ? WHERE `idPosts` = ?',
        [thumbNail, content, author, postingDate, anHien, noiBat, title, slug, idPosts]
    );
    return results;
}
const queryUpdateContact = async (id, name, logo, email, hotline, address, description, active, updated_at) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`contact` SET `name` = ?, `logo` = ?, `email` = ?, `hotline` = ?, `address` = ?, `description` = ?, `active` = ?, `updated_at` = CURRENT_TIMESTAMP WHERE `id` = ?',
        [name, logo, email, hotline, address, description, active, id]
    );
    return results;
}

module.exports = {
    //get
    getUserById, getallusers, getAllPosts,
    getUserByUsernameAndPassword, getAllcontact,
    //create
    queryCreateUser, queryCreatePosts, queryCreateContact,
    //delete
    deleteUserById, deletePostById, deleteContactrById,
    //update
    queryUpdateUser, queryUpdatePost, queryUpdateContact,
}