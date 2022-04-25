exports.filters = {
    VAR12MES: (ticker, VAR12MES) => {
            if (!VAR12MES || VAR12MES == "undefined")
                return ticker
            try {
                switch (VAR12MES) {
                    case "I10":
                        if (ticker.Oscilacoes[3].Var <= -10)
                            return ticker
                        break
                    case "EA10E1":
                        if (ticker.Oscilacoes[3].Var >= -10 && ticker.Oscilacoes[3].Var <= 1)
                            return ticker
                        break
                    case "I1":
                        if (ticker.Oscilacoes[3].Var <= 1)
                            return ticker
                        break
                    case "A1":
                        if (ticker.Oscilacoes[3].Var >= 1)
                            return ticker
                        break
                    case "E1E10":
                        if (ticker.Oscilacoes[3].Var >= 1 && ticker.Oscilacoes[3].Var <= 10)
                            return ticker
                        break
                    case "A10":
                        if (ticker.Oscilacoes[3].Var >= 10)
                            return ticker
                        break
                    case "E10E20":
                        if (ticker.Oscilacoes[3].Var >= 10 && ticker.Oscilacoes[3].Var <= 20)
                            return ticker
                        break
                    case "A20":
                        if (ticker.Oscilacoes[3].Var >= 20)
                            return ticker
                        break
                }
            } catch {}
        },

    VARMENSAL: (ticker, VARMENSAL) => {
        if (!VARMENSAL || VARMENSAL == "undefined")
            return ticker
        try {
            switch (VARMENSAL) {
                case "I10":
                    if (ticker.Oscilacoes[1].Var <= -10)
                        return ticker
                    break
                case "EA10E1":
                    if (ticker.Oscilacoes[1].Var >= -10 && ticker.Oscilacoes[1].Var <= 1)
                        return ticker
                    break
                case "I1":
                    if (ticker.Oscilacoes[1].Var <= 1)
                        return ticker
                    break
                case "A1":
                    if (ticker.Oscilacoes[1].Var >= 1)
                        return ticker
                    break
                case "E1E10":
                    if (ticker.Oscilacoes[1].Var >= 1 && ticker.Oscilacoes[1].Var <= 10)
                        return ticker
                    break
                case "A10":
                    if (ticker.Oscilacoes[1].Var >= 10)
                        return ticker
                    break
                case "E10E20":
                    if (ticker.Oscilacoes[1].Var >= 10 && ticker.Oscilacoes[1].Var <= 20)
                        return ticker
                    break
                case "A20":
                    if (ticker.Oscilacoes[1].Var >= 20)
                        return ticker
                    break
            }
        } catch {}
    },

    PRECODAACAO: (ticker, PRECODAACAO) => {
        if (!PRECODAACAO || PRECODAACAO == "undefined")
            return ticker
        try {
            switch (PRECODAACAO) {
                case "E5E15":
                    if (ticker.Cotacoes[0].Fec >= 5 && ticker.Cotacoes[0].Fec <= 15)
                        return ticker
                    break;
                case "E15E30":
                    if (ticker.Cotacoes[0].Fec >= 15 && ticker.Cotacoes[0].Fec <= 30)
                        return ticker
                    break
                case "E30E50":
                    if (ticker.Cotacoes[0].Fec >= 30 && ticker.Cotacoes[0].Fec <= 50)
                        return ticker
                    break
                case "E50E100":
                    if (ticker.Cotacoes[0].Fec >= 50 && ticker.Cotacoes[0].Fec <= 100)
                        return ticker
                    break
                case "A100":
                    if (ticker.Cotacoes[0].Fec >= 100)
                        return ticker
                    break
            }
        } catch {}
    },

    SETOR: (ticker, SETOR) => {
        // FILTRA DE ACORDO COM O SETOR
        if (!SETOR || SETOR == "undefined") {
            return ticker
        }
        try {
            if (ticker.ClassificacaoSetorial[0]?.Setor == SETOR) {
                return ticker
            }
        } catch {}
    },

    VALORDEMERCADO: (ticker, VALORDEMERCADO) => {
        // VERIFICA SE O VALOR DE MERCADO É SUPERIOR AO FILTRO
        if (!VALORDEMERCADO || VALORDEMERCADO == "undefined") {
            return ticker
        }
        try {
            if (ticker.ValorDeMercado[0].ValorDeMercado >= VALORDEMERCADO) {
                return ticker
            }
        } catch {}
    },

    LIQUIDEZIMEDIATA: (ticker, LIQUIDEZIMEDIATA) => {
        // VERIFICA SE O TICKER É PETR4
        if (!LIQUIDEZIMEDIATA || LIQUIDEZIMEDIATA == "undefined") {
            return ticker
        }
        try {
            switch (LIQUIDEZIMEDIATA) {
                case "M1":
                    if (ticker.indices.LiquidezImediata < 1) {
                        return ticker
                    }
                    break;
                case "I1":
                    if (Math.round(ticker.indices.LiquidezImediata) == 1) {
                        return ticker
                    }
                    break;
                case "A1":
                    if (ticker.indices.LiquidezImediata > 1) {
                        return ticker
                    }
                    break;
                default:
                    throw new Error()
                    break;
            }
        } catch {}
    }
}