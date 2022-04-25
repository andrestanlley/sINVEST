const Lists = require('../constants/Lists')
const {
    filters
} = require('../constants/filters')

exports.all = async (req, res) => {
    const {
        VALORDEMERCADO,
        LIQUIDEZIMEDIATA,
        SETOR,
        PRECODAACAO,
        VARMENSAL
    } = req.query

    const response = Lists.tickerInMemory.filter(ticker =>
        filters.VALORDEMERCADO(ticker, VALORDEMERCADO) &&
        filters.LIQUIDEZIMEDIATA(ticker, LIQUIDEZIMEDIATA) &&
        filters.SETOR(ticker, SETOR) &&
        filters.PRECODAACAO(ticker, PRECODAACAO) &&
        filters.VARMENSAL(ticker, VARMENSAL)
        

        )

    return res.status(200).send(response)
}