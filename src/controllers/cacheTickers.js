const axios = require('axios')
const tick = require('../controllers/ticker')
const Lists = require ('../constants/Lists')

exports.saveTickersInMemory = async (req, res) => {
    console.log("Iniciando requisições!")
    for await (let ticker of Lists.acoes){
        try {
            const result = await tick.request("getCotacoesBalancos", ticker)
            if(result.data.getCotacoesBalancos || !result.data.DescricaoDoAtivo[0]){
                //console.log(ticker, result.data.getCotacoesBalancos)
                throw new Error()
            }
            Lists.tickerInMemory.push(result.data)
            console.log(`Requisição para ${ticker}, ${Lists.tickerInMemory.length} Ações na memoria.`)
        } catch{}
    }
    console.log(`Requisições finalizadas. ${Lists.tickerInMemory.length} ações adicionadas. ${Lists.acoes.length - Lists.tickerInMemory.length} ações com erro.`)
}

exports.all = (req,res)=>{
    return res.status(200).send(Lists.tickerInMemory)
}