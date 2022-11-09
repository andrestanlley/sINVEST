const tick = require('../controllers/aboutTicker')
const Lists = require('../constants/Lists')
const indicators = require('./indicators')
const { getBalanceData } = require('./getBalanceData')

exports.start = async () => {
    console.log("Iniciando requisições!")
    Lists.tickerInMemory = [];
    for await (let ticker of Lists.acoes) {
        try {
            let result = await tick.request("getCotacoesBalancos", ticker)
            if (result.data.getCotacoesBalancos || !result.data.DescricaoDoAtivo[0]) {
                throw new Error()
            }
            result.data.indicadores = indicators.add(result.data)
            const SanitizedTicker = getBalanceData(result.data)
            Lists.tickerInMemory.push(SanitizedTicker)
            console.log(`Requisição para ${ticker}, ${Lists.tickerInMemory.length} Ações na memoria.`)
        } catch {}
    }
    console.log(`Requisições finalizadas. ${Lists.tickerInMemory.length} ações adicionadas. ${Lists.acoes.length - Lists.tickerInMemory.length} ações com erro.`)
    try {
        Lists.tickerInMemory.sort((a, b) => b.ValorDeMercado[0]?.ValorDeMercado - a.ValorDeMercado[0]?.ValorDeMercado) 
    } catch {}
}