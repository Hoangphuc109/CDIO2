const connection = require('../config/database')

//Get all Product
const getproduct = async () => {
    let [results, fields] = await connection.query('SELECT * FROM rice_4_man.product;')
    return results
}

//Get Product by Id
const getproductid = async (idProduct) => {
    let [results, fields] = await connection.query('SELECT * FROM rice_4_man.product WHERE idProduct = ?;', [idProduct])
    let product = results && results.length > 0 ? results[0] : {};
    return product
}

//Get Product by idType
const getproducttype = async (idType) => {
    let [results, fields] = await connection.query('SELECT * FROM rice_4_man.product WHERE idType = ?;', [idType])
    let product = results && results.length > 0 ? results[0] : {};
    return product
}

//Get Product Noi bat
const getproductnb = async () => {
    let [results, fields] = await connection.query('SELECT * FROM rice_4_man.product WHERE noiBat = 1;')
    return results
}

//Add Product
const addproduct = async (idProduct, idType, idBrand, nameProduct, slug, price, urlImage, describe, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand) => {
    let [results, fields] = await connection.query(
        'INSERT INTO `rice_4_man`.`product` (`idProduct`, `idType`, `idBrand`, `nameProduct`, `slug`, `price`, `urlImage`, `describe`, `postingDate`, `views`, `purchases`, `anHien`, `noiBat`, `ProductType_idType`, `Brand_idBrand`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP, ?, ?, ?, ?, ?, ?)',
        [idProduct, idType, idBrand, nameProduct, slug, price, urlImage, describe, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand],
    );
}

//Delete Product
const deleteproduct = async (idProduct) => {
    let [results, fields] = await connection.query('DELETE FROM rice_4_man.product WHERE idProduct = ?;', [idProduct])
}

//Update Product 
const updateproduct = async (idProduct, idType, idBrand, NamePro, slug, price, urlImage, describe, postDate, views, purchase, anHien, noibat, idType2, idBrand2) => {
    let [results, fields] = await connection.query(
        'UPDATE `rice_4_man`.`product` SET `idType` = ?, `idBrand` = ?,`nameProduct` = ?,`slug` = ?,`price` = ?, `urlImage` = ?, `describe` = ?, `postingDate` = ?,`views` = ?,`purchases` = ?,`anHien` = ?,`noiBat` = ?,`ProductType_idType` = ?,`Brand_idBrand` = ? WHERE `idProduct` = ?;',
        [idType, idBrand, NamePro, slug, price, urlImage, describe, postDate, views, purchase, anHien, noibat, idType2, idBrand2, idProduct],
    );
}

module.exports = {
    getproduct, getproductid, getproducttype, getproductnb
    , addproduct, deleteproduct, updateproduct
}