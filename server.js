const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://paula:mongoPass@cluster0.ahu2j.mongodb.net/contactsDB')

app.use('/', require('./routes/contactRoute'))

app.listen(3001, function(){
    console.log('express server is running on port 3001')
})
