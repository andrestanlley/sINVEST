const Lists = require("../constants/Lists")

exports.auth = (req, res, next)=>{
    if(Lists.tickerInMemory.length < 1 || !req.headers.reactauth){ 
        return res.status(401).send({message: "Não autorizado. tente novamente em 1 minuto."})
    }
    next()
}