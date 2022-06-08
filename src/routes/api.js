const express = require('express')
const aboutTicker = require('../controllers/aboutTicker')
const tickers = require('../controllers/tickers')
const router = express.Router()

router.get("/ticker/:ticker", aboutTicker.get)
router.get("/lastview", aboutTicker.lastView)
router.get("/tickers", tickers.all)

module.exports = router