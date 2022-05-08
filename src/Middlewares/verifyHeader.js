const Lists = require("../constants/Lists")

exports.auth = (req, res, next)=>{
    if(Lists.tickerInMemory.length < 56 || !req.headers.reactauth){ 
        return res.status(401).send({message: "Não autorizado. tente novamente em 1 minuto."})
    }
    next()
}

exports.ssl = (req, res, next)=>{
    if(req.secure){
      next()
    }else{
      return res.redirect(`https://${req.hostname}${req.url}`); 
    }
}