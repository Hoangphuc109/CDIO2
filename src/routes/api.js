const express = require('express');
const users = require('./user.js')
const posts = require('./posts.js')
const contact = require('./contact.js')
const loggin = require('./loggin.js')
const invoice = require('./invoice.js')
const invoiceDetails = require('./invoicedetail.js')
const productRoute = require('./product.route.js')
const brandRoute = require('./brand.route.js')
const typeRoute = require('./productType.route.js')

const router = express.Router()

//Product
router.use('/product', productRoute)
//Brand
router.use('/brand', brandRoute)
//Type
router.use('/type', typeRoute)

router.use('/users', users)

router.use('/posts', posts)

router.use('/contact', contact)

router.use('/loggin', loggin)

router.use('/invoice', invoice)

router.use('/invoicedetail', invoiceDetails)



module.exports = router