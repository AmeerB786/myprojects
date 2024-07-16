const fs = require('fs')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const CryptoDetails = require('./models/CryptoDetails')

dotenv.config({ path: './config.env' })

const mongoURI = 'mongodb://localhost/MYCRYPTODB';

const app = express()

app.use(express.json())
app.use(cors())

// connect to mongodb
mongoose.connect(mongoURI).then(() => console.log('db connected'))

app.get('/getCryptoDetails', (req, res) => {
    CryptoDetails.find()
    .then(cryptoDetails=>res.json(cryptoDetails))
    .catch(err=>res.json(err))
})


// import api data into MongoDB
const importData = async () => {
  try {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`);   
    const data = await res.json();

    await CryptoDetails.create(data)
    console.log('api data successfully imported')
    
  } catch (error) {
    console.log('error', error)
  }
}

importData()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`listening to port ${PORT}`))