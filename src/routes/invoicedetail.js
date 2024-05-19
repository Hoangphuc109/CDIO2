const express = require('express');
const { //get
    getAllInvoiceDetails,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
} = require('../controlers/invoicedetail');
const router = express.Router();
//-------------------------------------

router.get('/', getAllInvoiceDetails);
router.post('/createInvoiceDetail', createInvoiceDetail);
router.put('/updateInvoiceDetail', updateInvoiceDetail);
router.delete('/deleteInvoiceDetail/:id', deleteInvoiceDetail);


module.exports = router;