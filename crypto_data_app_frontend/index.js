const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const DBString = process.env.DATABASE_URL

// Set up the express app
const app = express();

//Allows us to accept the data in JSON format
app.use(express.json());

//DATABASE Connection
mongoose.connect(DBString);
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

//Server Started
app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})


const cryptoDetailsRouter = require('./routes/cryptodetail');

app.use('/cryptodetails', cryptoDetailsRouter);