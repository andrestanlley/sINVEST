const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/admin', (req,res) => res.redirect("https://p.www.visaomacro.com/wp-login.php"))
router.use('/:id', express.static(path.resolve("src/front/dist")))
router.get('/', express.static(path.resolve("src/front/dist")))


module.exports = router