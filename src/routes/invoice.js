const express = require('express');
const { //get
    getAllInvoices, getInvoiceId,
    createInvoice,
    updateInvoice,
    deleteInvoice,
} = require('../controlers/invoice');
const router = express.Router();
//-------------------------------------

router.get('/', getAllInvoices);
router.get('/:id', getInvoiceId)
router.post('/createInvoice', createInvoice);
router.put('/updateInvoice', updateInvoice);
router.delete('/deleteInvoice/:id', deleteInvoice);





module.exports = router;