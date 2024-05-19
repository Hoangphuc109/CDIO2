const express = require('express');
const { //get
    getAllInvoices,
    createInvoice,
    updateInvoice,
    deleteInvoice,
} = require('../controlers/invoice');
const router = express.Router();
//-------------------------------------

router.get('/', getAllInvoices);
router.post('/createInvoice', createInvoice);
router.put('/updateInvoice', updateInvoice);
router.delete('/deleteInvoice/:id', deleteInvoice);





module.exports = router;