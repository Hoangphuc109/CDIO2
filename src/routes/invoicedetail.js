const express = require('express');
const { //get
    getAllInvoiceDetails, getInvoiceDetailsId,
    createInvoiceDetail,
    updateInvoiceDetail,
    deleteInvoiceDetail
} = require('../controlers/invoicedetail');
const { upload } = require('../midleware/midleware')

const router = express.Router();
//-------------------------------------

router.get('/', getAllInvoiceDetails);
router.get('/:id', getInvoiceDetailsId)
router.post('/createInvoiceDetail', upload.single('urlImage'), createInvoiceDetail);
router.put('/updateInvoiceDetail', upload.single('urlImage'), updateInvoiceDetail);
router.delete('/deleteInvoiceDetail/:id', deleteInvoiceDetail);


module.exports = router;