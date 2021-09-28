const express = require('express')
const router = express.Router()
const Contact = require('../models/contactModel')
const {MongoClient} = require("mongodb");
const {response} = require("express");
const ObjectId = require("mongoose").ObjectId

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

router.route('/editContact/:id').put( function (req, res) {
    let contactId = req.params.id;
    console.log(contactId)
    MongoClient.connect(url, {useUnifiedTopology: true}, function (err, client) {
        if (err) res.status(400).send('Something bad happened: ' + err.message)
        let query = {_id: ObjectId(contactId)}
        let updatedContact = req.body
        let db = client.db(dbName)
        db.collection(contacts).updateOne(query, {$set: updatedContact}, function (err, result) {
            if (err) res.status(400).send('Something bad happened: ' + err.message)
            res.sendStatus(204)
            client.close()
        })
    })
})


router.route('/contacts').get((req, res) => {
    Contact.find()
        .then(foundContacts => res.json(foundContacts))
})

module.exports = router