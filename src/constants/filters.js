exports.filters = {
    SETOR: (ticker, SETOR) => {
        // FILTRA DE ACORDO COM O SETOR
        if(!SETOR || SETOR == "undefined"){
            return ticker
        }
        try {
            if(ticker.ClassificacaoSetorial[0]?.Setor == SETOR){
                return ticker
            }
        } catch{}
    },

    VALORDEMERCADO: (ticker, VALORDEMERCADO) => {
        // VERIFICA SE O VALOR DE MERCADO É SUPERIOR AO FILTRO
        if(!VALORDEMERCADO || VALORDEMERCADO == "undefined"){
            return ticker
        }
        try {
            if(ticker.ValorDeMercado[0].ValorDeMercado >= VALORDEMERCADO){
                return ticker
            }
        } catch{}
    },

    LIQUIDEZIMEDIATA: (ticker, LIQUIDEZIMEDIATA) => {
        // VERIFICA SE O TICKER É PETR4
        if(!LIQUIDEZIMEDIATA || LIQUIDEZIMEDIATA == "undefined"){
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
}
