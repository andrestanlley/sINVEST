const axios = require('axios')
require('dotenv').config()
const qs = require('qs')

let lastView = [
    {
        "nm_empresa": "PETROBRAS   ON      N2",
        "setor_economico": "Petróleo, Gás e Biocombustíveis",
        "segmento_b3": "PETROBRAS   ON      N2",
        "cd_acao": "PETR3"
      },
      {
        "nm_empresa": "VALE        ON      NM",
        "setor_economico": "Materiais Básicos ",
        "segmento_b3": "VALE        ON      NM",
        "cd_acao": "VALE3"
      },
      {
        "nm_empresa": "IRANI       ON      NM",
        "setor_economico": "Materiais Básicos ",
        "segmento_b3": "IRANI       ON      NM",
        "cd_acao": "RANI3"
      },
      {
        "nm_empresa": "AZUL        PN      N2",
        "setor_economico": "Bens Industriais",
        "segmento_b3": "AZUL        PN      N2",
        "cd_acao": "AZUL4"
      }
]

const addLastView = (ticker)=>{
    try {
        if(!lastView.find(tick => tick.cd_acao == ticker.DescricaoDoAtivo[0].Codigo)){
            let newViewed = {
                "nm_empresa": ticker.DescricaoDoAtivo[0].NomeMercado,
                "setor_economico": ticker.ClassificacaoSetorial[0].Setor,
                "segmento_b3": ticker.DescricaoDoAtivo[0].NomeMercado,
                "cd_acao": ticker.DescricaoDoAtivo[0].Codigo,
            }
            lastView.push(newViewed)
            if (lastView.length > 4) {
                lastView.shift()
            }
        }
    } catch (error) {
        console.log(`Erro ao adicionar ${ticker.DescricaoDoAtivo[0].Codigo} ao lastView`)
    }
}

exports.lastView = (req,res)=>{
    return res.status(200).send(lastView)
}

const request = async (method, ticker) => {
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
        const result = await request("getCotacoesBalancos", ticker)
        console.log(`VISUALIZADO: ${result.data.DescricaoDoAtivo[0].Codigo}.`)
        addLastView(result.data)
        res.status(200).send(result.data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}