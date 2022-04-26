const axios = require('axios')
require('dotenv').config()
const Lists = require("../constants/Lists")
const lastView = require('../services/lastview')
const qs = require('qs')
const indicators = require('../services/indicators')

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
        const result = await this.request("getCotacoesBalancos", ticker)
        console.log(`VISUALIZADO: ${ticker.toUpperCase()}.`)
        result.data.indicadores = indicators.add(result.data)
        lastView.add(result.data)
        return res.status(200).send(result.data)
    } catch (error) {
        res.status(500).send(error.message)
    }
}