const axios = require('axios')
const ticker = require('../controllers/ticker')
const Lists = require ('../constants/Lists')

exports.saveTickersInMemory = async (req, res) => {
    console.log("Iniciando requisições!")
    const allTickers = await axios.get('https://api-cotacao-b3.labdo.it/api/empresa')
    allTickers.data.forEach(ticker => {
        ticker.cd_acao.split(",").forEach(cod => {
            Lists.tickerList.push(cod.trim())
        })
    })
    for await (let savedTicker of Lists.tickerList){
        try {
            const result = await ticker.request("getCotacoesBalancos", savedTicker)
            if(result.data.getCotacoesBalancos || !result.data.DescricaoDoAtivo[0]){
                throw new Error()
            }
            Lists.tickerInMemory.push(result.data)
            console.log(`Requisição para ${savedTicker}, ${Lists.tickerInMemory.length} Ações na memoria.`)
        } catch{}
    }
    console.log(`Requisições finalizadas. ${Lists.tickerInMemory.length} ações adicionadas. ${Lists.tickerList.length - Lists.tickerInMemory.length} ações com erro.`)
}

exports.all = (req,res)=>{
    return res.status(200).send(Lists.tickerInMemory)
}