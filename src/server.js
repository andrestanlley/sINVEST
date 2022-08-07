const saveTickersInMemory = require("../src/services/saveTickersInMemory")
const verifyHeader = require('./Middlewares/verifyHeader')
const api = require('./routes/api')
const blog = require('./routes/blog')
const express = require('express')
const http = require('http')
const https = require('https')
const fs = require('fs')
const path = require('path')
require('dotenv').config()
const morgan = require('morgan')
const app = express()

app.use(express.json())

app.use('*', verifyHeader.ssl)

app.use('/api', verifyHeader.auth, morgan('tiny'), api)
app.use('/blog', blog)
app.use('/ativos', express.static(path.resolve("src/front/dist")))
app.use('/sobre/:ticker', express.static(path.resolve("src/front/dist")))
app.use('/contato', express.static(path.resolve("src/front/dist")))
app.use('/', express.static(path.resolve("src/front/dist")))

let credencials = {
  key: fs.readFileSync(path.resolve("/etc/letsencrypt/live/visaomacro.com/privkey.pem")),
  cert: fs.readFileSync(path.resolve("/etc/letsencrypt/live/visaomacro.com/fullchain.pem")),
}

let httpServer = http.createServer(app)
let httpsServer = https.createServer(credencials, app)

httpServer.listen(80)
httpsServer.listen(443, () => {
  console.log("Servidor rodando nas portas 80 e 443");
  saveTickersInMemory.start();
});
