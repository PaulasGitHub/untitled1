const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel')

router.route('/addContact').post((req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const street = req.body.street
    const streetnumber = req.body.streetnumber
    const zip = req.body.zip
    const city = req.body.city
    const state = req.body.state
    const country = req.body.country
    const privat = req.body.privat
    const owner = req.body.owner
    const newContact = new Contact({
        firstName,
        lastName,
        street,
        streetnumber,
        zip,
        city,
        state,
        country,
        privat,
        owner
    })
    newContact.save()
})

router.route('/contacts').get((req, res) => {
    Contact.find()
            .then(foundContacts => res.json(foundContacts))
})

module.exports = router