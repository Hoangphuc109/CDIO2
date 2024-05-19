const express = require('express');
const users = require('./user.js')
const posts = require('./posts.js')
const contact = require('./contact.js')
const loggin = require('./loggin.js')
const invoice = require('./invoice.js')
const invoiceDetails = require('./invoicedetail.js')



const router = express.Router()


router.use('/users', users)

router.use('/posts', posts)

router.use('/contact', contact)

router.use('/loggin', loggin)

router.use('/invoice', invoice)

router.use('/invoicedetail', invoiceDetails)



module.exports = router