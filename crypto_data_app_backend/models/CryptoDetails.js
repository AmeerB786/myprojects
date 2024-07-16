const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CryptoDetailsSchema = new Schema({
  name: {
    type: String,
    required: [true, 'name is mandetory'],
    trim: true,
    unique: true,
  },
  current_price: {
    type: Number,
    required: [true, 'price is mandetory'],
    trim: true,
  },
  market_cap: {
    type: String,
    required: [false, 'market capital is not mandatory'],
    trim: true,
  },
  total_supply: {
    type: String,
    required: [false, 'total supply is not mandatory'],
    trim: true,
  },
  last_updated: {
    type: String,
    required: [false, 'last_updated is not mandatory'],
    trim: true,
  },
})

const CryptoDetails = mongoose.model('CryptoDetails', CryptoDetailsSchema)

module.exports = CryptoDetails