const express = require('express')
const ticker = require('../controllers/ticker')
const cacheTickers = require('../controllers/cacheTickers')
const router = express.Router()

router.get("/ticker/:ticker", ticker.getTicker)
router.get("/lastview", ticker.lastView)
router.get("/tickers", cacheTickers.all)

module.exports = router