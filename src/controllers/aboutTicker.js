const axios = require('axios')
require('dotenv').config()
const Lists = require("../constants/Lists")
const lastView = require('../services/lastview')
const qs = require('qs')

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


exports.get = async (req, res) => {
    const {
        ticker
    } = req.params
    try {
        var tickerResponse;
        Lists.tickerInMemory.forEach((acao) => {
            if (acao.DescricaoDoAtivo[0].Codigo == ticker)
                tickerResponse = acao
        })
        if(tickerResponse){
            lastView.add(tickerResponse)
            return res.status(200).send(tickerResponse)
        }
        return res.status(404).send({message: "Ação não encontrada."})
    } catch (error) {
        res.status(500).send(error.message)
    }
}