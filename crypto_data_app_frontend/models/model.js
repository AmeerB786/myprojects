const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
    Name: String,
    CurrentPrice: Number,
    MarketCapital: String,
    TotalSupply: String,
    LastUpdated: String
});

module.exports = mongoose.model('Cryptodetail', cryptoSchema);