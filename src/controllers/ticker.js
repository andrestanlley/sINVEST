const axios = require('axios')
require('dotenv').config()
const qs = require('qs')

const request = async(method, ticker)=>{
    const {BASEURL, ELOGIN, EPW} = process.env
    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: qs.stringify({
            "LOGIN": ELOGIN,
            "PASSWORD": EPW,
            "Symbol": ticker
        }),
        url: BASEURL+method
      };
    return await axios(options)
}

exports.getTicker = async(req,res)=>{
    const {ticker} = req.params
    const result = await request("getCotacoesBalancos", ticker)
    res.status(200).send(result.data)
}
