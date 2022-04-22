const express = require('express')
const router = express.Router()
const path = require('path')

router.use('/', (req,res)=>{
    res.send(path.resolve('/src/front/dist'))
})
router.use('/indices', express.static(path.resolve + '/src/front/dist'))
router.use('/sobre/:ticker', express.static(path.resolve + '/src/front/dist'))
router.use('/contato', express.static(path.resolve + '/src/front/dist'))

module.exports = router