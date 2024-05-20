const express = require('express');
const { getProducts, getProductId, getProductType, getProductNB
    , getFormAdd, getList, getFormUpdate, getprd
    , addProduct, deleteProduct, updateProduct
} = require('../controlers/product.contronller');
const router = express.Router();
const { upload } = require('../midleware/midleware')


//Get all Product
// router.post('/createprd', getprd)

router.get('/', getProducts)
//Get Product by Type
router.get('/:idType', getProductType)
//Get Product by Id
router.get('/:idProduct', getProductId)
//Get Product Noi bat
router.get('/noibat', getProductNB)
//Add Product
router.post('/add', upload.single('urlImage'), addProduct)
//Delete Product
router.delete('/delete/:idProduct', deleteProduct)
//Update Product
router.put('/update/:idProduct', updateProduct)

module.exports = router;