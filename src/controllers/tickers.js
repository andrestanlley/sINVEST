const Lists = require('../constants/Lists')
const {
    filters
} = require('../constants/filters')

exports.all = async (req, res) => {
    const {
        VALORDEMERCADO,
        LIQUIDEZIMEDIATA,
        SETOR,
        PRECODAACAO
    } = req.query

    const response = Lists.tickerInMemory.filter(ticker =>
        filters.VALORDEMERCADO(ticker, VALORDEMERCADO) &&
        filters.LIQUIDEZIMEDIATA(ticker, LIQUIDEZIMEDIATA) &&
        filters.SETOR(ticker, SETOR) &&
        filters.PRECODAACAO(ticker, PRECODAACAO)
        
        
        )

    return res.status(200).send(response)
}