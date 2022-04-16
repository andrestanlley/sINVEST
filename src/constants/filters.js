exports.firstFilter = (ticker, SEL1) => {
    // VERIFICA SE O VALOR DE MERCADO É SUPERIOR AO FILTRO
    if(!SEL1){
        return ticker
    }
    try {
        if(ticker.ValorDeMercado[0].ValorDeMercado >= SEL1){
            return ticker
        }
    } catch{}
}

exports.secondFilter = (ticker, SEL2) => {
    // VERIFICA SE O TICKER É PETR4
    if(!SEL2){
        return ticker
    }
    return ticker.DescricaoDoAtivo[0].Codigo == "PETR4" ? ticker : null 
}