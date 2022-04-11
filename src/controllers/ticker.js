const axios = require('axios')
require('dotenv').config()
const lastView = require("../constants/LastView")
const qs = require('qs')

const addLastView = (ticker)=>{
    try {
        if(!lastView.list.find(tick => tick.cd_acao == ticker.DescricaoDoAtivo[0].Codigo)){
            let newViewed = {
                "nm_empresa": ticker.DescricaoDoAtivo[0].NomeMercado || "Indisponivel",
                "setor_economico": ticker.ClassificacaoSetorial[0].Setor || "Indisponivel",
                "segmento_b3": ticker.DescricaoDoAtivo[0].NomeMercado.substr(-2) || "Indisponivel",
                "cd_acao": ticker.DescricaoDoAtivo[0].Codigo || "Indisponivel",
            }
            lastView.list.push(newViewed)
            if (lastView.list.length > 8) {
                lastView.list.shift()
            }
        }
    } catch (error) {
        console.log(`Erro ao adicionar ${ticker.DescricaoDoAtivo[0].Codigo} ao lastView`)
    }
}

exports.lastView = (req,res)=>{
    return res.status(200).send(lastView)
}

exports.request = async (method, ticker) => {
    const {
        BASEURL,
        ELOGIN,
        EPW
    } = process.env
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        data: qs.stringify({
            "LOGIN": ELOGIN,
            "PASSWORD": EPW,
            "Symbol": ticker
        }),
        url: BASEURL + method
    };
    return await axios(options)
}


exports.getTicker = async (req, res) => {
    const {
        ticker
    } = req.params
    try {
        const result = await this.request("getCotacoesBalancos", ticker)
        if(result.data.DescricaoDoAtivo[0].Codigo){
            console.log(`VISUALIZADO: ${ticker.toUpperCase()}.`)
            addLastView(result.data)
            return res.status(200).send(result.data)
        }
        throw new {message: "Ticker não encontrado."}
    } catch (error) {
        res.status(500).send(error.message)
    }
}