const connection = require('../config/database')
//get

const getAllPosts = async () => {
    let [results, fields] = await connection.query('SELECT * FROM `rice_4_man`.`posts`;')
    return results
}

const queryCreatePosts = async (idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`Posts` (`idPots`, `thumbNail`, `content`, `author`, `postingDate`, `anHien`, `noiBat`, `title`, `slug`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug]
    );
    return results;
}

const deletePostById = async (id) => {
    let [results, fields] = await connection.query(
        'DELETE FROM `rice_4_man`.`posts`WHERE `idPots` = ?;',
        [id]
    )
}

const queryUpdatePost = async (idPots, thumbNail, content, author, postingDate, anHien, noiBat, title, slug) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`Posts` SET `thumbNail` = ?, `content` = ?, `author` = ?, `postingDate` = ?, `anHien` = ?, `noiBat` = ?, `title` = ?, `slug` = ? WHERE `idPots` = ?',
        [thumbNail, content, author, postingDate, anHien, noiBat, title, slug, idPots]
    );
    return results;
}


module.exports = {
    //get
    getAllPosts, queryCreatePosts, deletePostById, queryUpdatePost,
}