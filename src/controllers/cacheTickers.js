const axios = require('axios')
const ticker = require('../controllers/ticker')

const tickerList = []
const tickerInMemory = []

exports.saveTickersInMemory = async (req, res) => {
    console.log("Iniciando requisições!")
    const allTickers = await axios.get('https://api-cotacao-b3.labdo.it/api/empresa')
    allTickers.data.forEach(ticker => {
        ticker.cd_acao.split(",").forEach(cod => {
            tickerList.push(cod.trim())
        })
    })
    for await (let savedTicker of tickerList){
        try {
            const result = await ticker.request("getCotacoesBalancos", savedTicker)
            if(savedTicker.includes(" ")){
                throw new Error()
            }
            if (result.data.DescricaoDoAtivo[0].Codigo) {
                tickerInMemory.push(result.data)
                console.log(`Requisição para ${savedTicker}, ${tickerInMemory.length} Ações na memoria.`)
            }
        } catch (error) {
            console.log(`Erro ao requerer ${savedTicker}`)
        }
    }
    console.log(`Requisições finalizadas. ${tickerInMemory.length} ações listadas.`)
}

exports.all = (req,res)=>{
    return res.status(200).send(tickerInMemory)
}