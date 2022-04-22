const saveTickersInMemory = require("../src/services/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
const api = require('./routes/api')
const express = require('express')
const https = require('https')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const app = express()

app.use(express.json())

app.use('/api', verifyHeader.auth, api)
app.use('/', express.static(path.resolve("src/front/dist")))
app.use('/indices', express.static(path.resolve("src/front/dist")))
app.use('/sobre/:ticker', express.static(path.resolve("src/front/dist")))
app.use('/contato', express.static(path.resolve("src/front/dist")))

https
  .createServer({
      key: fs.readFileSync(path.resolve("src/ssl/private.key")),
      cert: fs.readFileSync(path.resolve("src/ssl/certificate.crt")),
    },
    app
  )
  .listen(443, () => {
    console.log("Servidor rodando na porta 443");
    saveTickersInMemory.start()
    setInterval(() => {
      saveTickersInMemory = []
      saveTickersInMemory.start()
    }, 21600000);
  });