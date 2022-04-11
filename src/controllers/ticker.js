const axios = require('axios')
require('dotenv').config()
const qs = require('qs')

let lastView = [
    {
        "nm_empresa": "PETROBRAS",
        "setor_economico": "Petróleo, Gás e Biocombustíveis",
        "segmento_b3": "N2",
        "cd_acao": "PETR3"
      },
      {
        "nm_empresa": "VALE",
        "setor_economico": "Materiais Básicos ",
        "segmento_b3": "NM",
        "cd_acao": "VALE3"
      },
      {
        "nm_empresa": "IRANI",
        "setor_economico": "Materiais Básicos ",
        "segmento_b3": "NM",
        "cd_acao": "RANI3"
      },
      {
        "nm_empresa": "AZUL",
        "setor_economico": "Bens Industriais",
        "segmento_b3": "N2",
        "cd_acao": "AZUL4"
      },
      {
        "nm_empresa": "COSAN",
        "setor_economico": "Petróleo, Gás e Biocombustíveis",
        "segmento_b3": "NM",
        "cd_acao": "CSAN3"
      },
      {
        "nm_empresa": "DOMMO",
        "setor_economico": "Petróleo, Gás e Biocombustíveis",
        "segmento_b3": "RD",
        "cd_acao": "DMMO11"
      },
      {
        "nm_empresa": "BRADESPAR",
        "setor_economico": "Financeiro",
        "segmento_b3": "N1",
        "cd_acao": "BRAP3"
      },
      {
        "nm_empresa": "GERDAU",
        "setor_economico": "Materiais Básicos ",
        "segmento_b3": "N1",
        "cd_acao": "GGBR3"
      }
]

const addLastView = (ticker)=>{
    try {
        if(!lastView.find(tick => tick.cd_acao == ticker.DescricaoDoAtivo[0].Codigo)){
            let newViewed = {
                "nm_empresa": ticker.DescricaoDoAtivo[0].NomeMercado || "Indisponivel",
                "setor_economico": ticker.ClassificacaoSetorial[0].Setor || "Indisponivel",
                "segmento_b3": ticker.DescricaoDoAtivo[0].NomeMercado.substr(-2) || "Indisponivel",
                "cd_acao": ticker.DescricaoDoAtivo[0].Codigo || "Indisponivel",
            }
            lastView.push(newViewed)
            if (lastView.length > 8) {
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