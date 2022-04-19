const express = require('express')
const router = express.Router()
const rootPath = require('path').dirname(Object.keys(require.cache)[0])

router.use('/', express.static(rootPath + '/front/dist'))
router.use('/indices', express.static(rootPath + '/front/dist'))
router.use('/sobre/:ticker', express.static(rootPath + '/front/dist'))
router.use('/contato', express.static(rootPath + '/front/dist'))

module.exports = router