const Lists = require ('../constants/Lists')
const { firstFilter, secondFilter } = require('../constants/filters')

exports.all = async(req,res)=>{
    const {VALORDEMERCADO, LIQUIDEZIMEDIATA, SEL3} = req.query
    console.log(VALORDEMERCADO, LIQUIDEZIMEDIATA)
    const response = Lists.tickerInMemory.filter(ticker => 
        firstFilter(ticker, VALORDEMERCADO) 
        && secondFilter(ticker, LIQUIDEZIMEDIATA))
    return res.status(200).send(response)
}