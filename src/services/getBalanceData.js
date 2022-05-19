exports.getBalanceData = (ticker)=>{
    for (let data in ticker.ResumoBalancoDFP[0]) {
        if (ticker.ResumoBalancoDFP[0][data] == 0) {
            delete ticker.ResumoBalancoDFP[0][data]
        }
    }
    for (let indicador in ticker.indicadores) {
        if (ticker.indicadores[indicador] == 0 ||
            ticker.indicadores[indicador] == 'Infinity' ||
            ticker.indicadores[indicador] == 'NaN')
            ticker.indicadores[indicador] = "-"
    }
    return ticker
}

