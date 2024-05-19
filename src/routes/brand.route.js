const express = require('express')
const {getBrand, addBrand, updateBrand, deleteBrand,
    getForm, getList
} = require('../controlers/brand.controller')

const router = express.Router()

//Get all Brand
router.get('/', getBrand)
// router.get('/list', getList)
//Add Brand
router.post('/add', addBrand)
//Update Brand
//router.get('/update/:idBrand', getForm)
router.put('/update/:idBrand', updateBrand)
//Delete Brand
router.delete('/delete/:idBrand', deleteBrand)



module.exports = router