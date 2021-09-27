const mongoose = require('mongoose')

const contactsSchema= {
    firstName: String,
    lastName: String,
    street: String,
    streetnumber: String,
    zip: String,
    city: String,
    state: String,
    country: String,
    privat: false,
    owner: String
}

const Contact = mongoose.model('Contact', contactsSchema)

module.exports = Contact