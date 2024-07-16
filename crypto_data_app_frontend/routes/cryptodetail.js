const express = require('express');
const router = express.Router();
const Cryptodetail = require('../models/model');

// Get all crypto_details
router.get('/', async (req, res) => {
  try {
    const cryptodetails = await Cryptodetail.find();
    res.json(cryptodetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});    
    module.exports = router;
