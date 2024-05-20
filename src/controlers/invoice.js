const express = require('express');
const {
    queryGetAllInvoices, getInvoicesById,
    queryCreateInvoice,
    queryUpdateInvoice,
    queryDeleteInvoice,
} = require('../services/invoice');
const getAllInvoices = async (req, res) => {
    try {
        let results = await queryGetAllInvoices();
        return res.json({ invoices: results });
    } catch (error) {
        console.error('Error fetching invoices:', error);
        return res.status(500).send('Internal Server Error');
    }
};
const getInvoiceId = async (req, res) => {
    const Invoiceid = req.params.id;
    let Invoice = await getInvoicesById(Invoiceid);
    return res.json({ Invoice })
}
const createInvoice = async (req, res) => {
    let { idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id } = req.body;
    try {
        await queryCreateInvoice(idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id);
        return res.send('Invoice created successfully');
    } catch (error) {
        console.error('Error creating invoice:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const updateInvoice = async (req, res) => {
    let { idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id } = req.body;
    try {
        await queryUpdateInvoice(idInvoice, idUser, total, payment, state, isDone, userName, email, phoneNumber, address, users_id);
        return res.send('Invoice updated successfully');
    } catch (error) {
        console.error('Error updating invoice:', error);
        return res.status(500).send('Internal Server Error');
    }
};

const deleteInvoice = async (req, res) => {
    const idInvoice = req.params.id;
    try {
        await queryDeleteInvoice(idInvoice);
        return res.send('Invoice deleted successfully');
    } catch (error) {
        console.error('Error deleting invoice:', error);
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getAllInvoices, getInvoiceId,
    createInvoice,
    updateInvoice,
    deleteInvoice,
};