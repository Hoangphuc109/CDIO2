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

module.exports = {
    getUserByUsernameAndPassword
}