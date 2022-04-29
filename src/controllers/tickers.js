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
        VARMENSAL,
        VAR12MES,
        MARGEMLIQUIDA,
        PL,
        RECEITALIQUIDA,
        AVALAVANCAGEM,
        LUCROLIQUIDO,
        EBITANUAL,
        ROE,
        MARGEMEBIT,
        LIQUIDEZCORRENTE,
        VOLUMEDIAANTERIOR
    } = req.query

    const response = Lists.tickerInMemory.filter(ticker =>
        filters.VALORDEMERCADO(ticker, VALORDEMERCADO) &&
        filters.LIQUIDEZIMEDIATA(ticker, LIQUIDEZIMEDIATA) &&
        filters.SETOR(ticker, SETOR) &&
        filters.PRECODAACAO(ticker, PRECODAACAO) &&
        filters.VARMENSAL(ticker, VARMENSAL) &&
        filters.VAR12MES(ticker, VAR12MES) &&
        filters.MARGEMLIQUIDA(ticker, MARGEMLIQUIDA) &&
        filters.PL(ticker, PL) &&
        filters.RECEITALIQUIDA(ticker, RECEITALIQUIDA) &&
        filters.AVALAVANCAGEM(ticker, AVALAVANCAGEM) &&
        filters.LUCROLIQUIDO(ticker, LUCROLIQUIDO) &&
        filters.EBITANUAL(ticker, EBITANUAL) &&
        filters.ROE(ticker, ROE) &&
        filters.MARGEMEBIT(ticker, MARGEMEBIT) &&
        filters.LIQUIDEZCORRENTE(ticker, LIQUIDEZCORRENTE) &&
        filters.VOLUMEDIAANTERIOR(ticker, VOLUMEDIAANTERIOR)
        )

    return res.status(200).send(response)
}