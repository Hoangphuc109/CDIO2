const { json } = require('express')

const { getbrands, getbrandid, addbrand, updatebrand, deletebrand

} = require('../services/brandService')

//Get all Brand
const getBrand = async (req, res) => {
    let brand = await getbrands()
    return res.json({ Brands: brand })
}


//Add Brand
const addBrand = async (req, res) => {
    try {
        let { idBrand, nameBrand, slug, urlImageBrand, order, anHien } = req.body
        await addbrand(idBrand, nameBrand, slug, urlImageBrand, order, anHien)
        return res.json('Add Successful!')
    }
    catch (error) {
        return res.status(500).json({error: error.message})
    }
}

//Update Brand
const updateBrand = async (req, res) => {
    try {
        let { idBrand, nameBrand, slug, urlImageBrand, order, anHien } = req.body
        await updatebrand(idBrand, nameBrand, slug, urlImageBrand, order, anHien)
        return res.json('Update Successful!')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
    
}

//Delete Brand
const deleteBrand = async (req, res) => {
    try {
        let idbrand = req.params.idBrand
        await deletebrand(idbrand)
        return res.json('Delete Successful!')
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

//Get Form Update Brand
const getForm = async (req, res) => {
    let idbrand = req.params.idBrand
    let bra = await getbrandid(idbrand)
    console.log(bra.idBrand);
    return res.render('updateBrand', { Brand: bra })
}

//Get List
const getList = async (req, res) => {
    let results = await getbrands()
    return res.render('listBrand', { brands: results })
}

module.exports = {
    getBrand, addBrand, updateBrand, deleteBrand,

    getForm, getList
}