const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/admin', (req,res) => res.redirect("http://visaomacro.com:5000/wp-login.php"))
router.get('/', express.static(path.resolve("src/front/dist")))
router.get('/:article/:post', (req,res)=>{
    console.log(req.params.article, req.params.post)
    res.send(path.resolve("src/front/dist"))
})

module.exports = router