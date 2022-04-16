const Lists = require ('../constants/Lists')
const { firstFilter, secondFilter } = require('../constants/filters')

exports.all = async(req,res)=>{
    const {SEL1, SEL2, SEL3} = req.query
    const response = Lists.tickerInMemory.filter(ticker => firstFilter(ticker, SEL1) && secondFilter(ticker, SEL2))
    return res.status(200).send(response)
}