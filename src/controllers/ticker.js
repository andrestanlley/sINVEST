const axios = require('axios')
require('dotenv').config()
const Lists = require("../constants/Lists")
const qs = require('qs')

const addLastView = (ticker) => {
    try {
        if (!Lists.lastview.find(tick => tick.cd_acao == ticker.DescricaoDoAtivo[0].Codigo)) {
            let newViewed = {
                name: ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial,
                ticker: ticker.DescricaoDoAtivo[0].Codigo,
                variacao: ticker.Oscilacoes[0].Var,
                setor: ticker.ClassificacaoSetorial[0] ? ticker.ClassificacaoSetorial[0].Setor : "Indisponivel"
            }
            Lists.lastview.push(newViewed)
            if (Lists.lastview.length > 8) {
                Lists.lastview.shift()
            }
        }
    } catch (error) {
        console.log(`Erro ao adicionar ${ticker.DescricaoDoAtivo[0].Codigo} ao lastView`)
    }
}

exports.lastView = (req, res) => {
    return res.status(200).send(Lists.lastview)
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
        if (result.data.DescricaoDoAtivo[0].Codigo) {
            console.log(`VISUALIZADO: ${ticker.toUpperCase()}.`)
            addLastView(result.data)
            return res.status(200).send(result.data)
        }
        throw new {
            message: "Ticker não encontrado."
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}