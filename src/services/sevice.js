const connection = require('../config/database')
const getUserByUsernameAndPassword = async (username, password) => {
    try {
        let [results, fields] = await connection.query('SELECT * FROM users WHERE email = ? AND password = ?', [username, password])
        let user = results && results.length > 0 ? results[0] : {};
        return user
    } catch (error) {
        throw new Error('Database query failed: ' + error.message);
    }
};

const queryCreateUser = async (id, name, email, phone, avatar, address, role, active, password, email_verified_at, remember_token, created_at, updated_at,) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`users` (`id`, `name`, `email`, `phone`,`avatar`,`address`, `role`, `active`, `password`,`email_verified_at`,`remember_token`,`created_at`,`updated_at` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [id, name, email, phone, avatar, address, role, active, password, email_verified_at, remember_token, created_at, updated_at],
    );
}
const getallusers = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`users`;')
    return results
}

module.exports = {
    getUserByUsernameAndPassword, queryCreateUser, getallusers,
}