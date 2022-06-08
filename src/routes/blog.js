const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/admin', (req,res) => res.redirect("https://unsteadfast-currenc.000webhostapp.com/wp-login.php"))
router.get('/', express.static(path.resolve("src/front/dist")))
router.get('*', (req, res)=> express.static(path.resolve("src/front/dist")));

module.exports = router