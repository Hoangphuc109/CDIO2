const { json } = require('express');

const { getproduct, getproductid, getproducttype, getproductnb
    , addproduct, deleteproduct, updateproduct

} = require('../services/productService')

//Get Product
const getProducts = async (req, res) => {
    let results = await getproduct()
    // return res.render('createtest', { ListProduct: results })
    return res.json({ Product: results })

}

//get Product by Id 
const getProductId = async (req, res) => {
    const productid = req.params.idProduct;
    let product = await getproductid(productid);
    return res.json({ ProductID: product })
}

//Get Product by idType
const getProductType = async (req, res) => {
    const productType = req.params.idType;
    let product = await getproducttype(productType);
    return res.json({ productType: product })
}

//Get Product Noi bat
const getProductNB = async (req, res) => {
    let productnb = await getproductnb()
    return res.json({ ProductNB: productnb })
}

//Add Product
const addProduct = async (req, res) => {
    try {
        let { idProduct, idType, idBrand, nameProduct, slug, price, describe, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand } = req.body;
        let urlImage = req.file ? req.file.filename : '';
        await addproduct(idProduct, idType, idBrand, nameProduct, slug, price, urlImage, describe, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand)
        return res.json('Add Successful!')
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

//Delete Product
const deleteProduct = async (req, res) => {
    try {
        const productid = req.params.idProduct;
        await deleteproduct(productid)
        return res.json('Delete Successful!')
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

//Update Product
const updateProduct = async (req, res) => {
    try {
        let { idProduct, idType, idBrand, nameProduct, slug, price, urlImage, describe, postingDate, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand } = req.body;
        await updateproduct(idProduct, idType, idBrand, nameProduct, slug, price, urlImage, describe, postingDate, views, purchases, anHien, noiBat, ProductType_idType, Brand_idBrand)
        return res.json('Update Successful!')
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

//Get form madd
const getFormAdd = (req, res) => {
    return res.render('addProduct')
}

//Get Form Update
const getFormUpdate = async (req, res) => {
    const productid = req.params.idProduct;
    let product = await getproductid(productid);
    console.log(product.idProduct);
    return res.render('updateProduct', { Product: product })
}

//Get List
const getList = async (req, res) => {
    let product = await getproduct()
    return res.render('list', { ListProduct: product })
}

module.exports = {
    getProducts, getProductId, getProductType, getProductNB
    , getFormAdd, getList, getFormUpdate
    , addProduct, deleteProduct, updateProduct
}