const express = require('express')
const ticker = require('../controllers/ticker')
const router = express.Router()

router.get("/ticker/:ticker", ticker.getTicker)
router.get("/lastview", ticker.lastView)

module.exports = router