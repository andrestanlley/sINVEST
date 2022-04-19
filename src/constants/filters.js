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

exports.secondFilter = (ticker, LIQUIDEZIMEDIATA) => {
    // VERIFICA SE O TICKER É PETR4
    if(!LIQUIDEZIMEDIATA){
        return ticker
    }
    try {
        switch (LIQUIDEZIMEDIATA) {
            case "M1":
                if(ticker.indices.LiquidezImediata < 1){
                    return ticker
                }
            break;
            case "I1":
                if(Math.round(ticker.indices.LiquidezImediata) == 1){
                    return ticker
                }
            break;
            case "A1":
                if(ticker.indices.LiquidezImediata > 1){
                return ticker
            }
            break;
            default:
                throw new Error()
                break;
        } 
    } catch  {}
}