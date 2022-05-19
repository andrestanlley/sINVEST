const express = require('express')
const aboutTicker = require('../controllers/aboutTicker')
const tickers = require('../controllers/tickers')
const posts = require('../controllers/posts')
const router = express.Router()

router.get("/ticker/:ticker", aboutTicker.get)
router.get("/lastview", aboutTicker.lastView)
router.get("/tickers", tickers.all)
router.get("/posts", posts.all)
router.get("/post/:idArtigo", posts.article)

module.exports = router