const express = require('express')
const routes = require('./routes/api')
const app = express()
const saveTickersInMemory = require("../src/functions/saveTickersInMemory")
const Lists = require("./constants/Lists")
require('dotenv').config()

app.use(express.json())

app.use('/', (req, res, next)=>{
    if(Lists.tickerInMemory.length < 10){
        return res.send("<h1>Servidor sendo iniciado</h1>")
    }
    next()
})
app.use('/', express.static(__dirname + '/front/dist'))
app.use('/api', routes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log("Running")
    saveTickersInMemory.start()
    setInterval(() => {
    saveTickersInMemory.start()
    }, 43200000);
})