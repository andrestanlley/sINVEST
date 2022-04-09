const express = require('express')
const ticker = require('../controllers/ticker')
const router = express.Router()

router.get("/ticker/:ticker", ticker.getTicker)

module.exports = router