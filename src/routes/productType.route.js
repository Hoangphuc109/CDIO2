const express = require('express')
const {getType, addType, updateType, deleteType} = require ('../controlers/productType.controller')

const router = express.Router()

//Get Product Type
router.get('/', getType)
//Add Product Type
router.post('/add', addType)
//Update Product Type 
router.put('/update/:idType')
//Delete Product Type
router.delete('/delete/:idType')

module.exports = router