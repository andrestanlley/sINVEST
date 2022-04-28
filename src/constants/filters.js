exports.filters = {
    AVALAVANCAGEM: (ticker, AVALAVANCAGEM) => {
        if (!AVALAVANCAGEM || AVALAVANCAGEM == "undefined")
            return ticker
        try {
            switch (AVALAVANCAGEM) {
                case "I1":
                    if (ticker.indicadores.Alavancagem <= 1)
                        return ticker
                    break
                case "E1E5":
                    if (ticker.indicadores.Alavancagem >= 1 && ticker.indicadores.Alavancagem <= 5)
                        return ticker
                    break
                    case "A5":
                    if (ticker.indicadores.Alavancagem >= 5)
                        return ticker
                    break
            }
        } catch {}
    },

    EBITANUAL: (ticker, EBITANUAL) => {
        if (!EBITANUAL || EBITANUAL == "undefined")
            return ticker
        try {
            switch (EBITANUAL) {
                case "AT1B":
                    if (ticker.ResumoBalancoDFP[0].EbitDFP <= 1000000000)
                        return ticker
                    break
                case "AT100M":
                    if (ticker.ResumoBalancoDFP[0].EbitDFP <= 100000000)
                        return ticker
                    break
                case "E100ME1B":
                    if (ticker.ResumoBalancoDFP[0].EbitDFP >= 100000000 && ticker.ResumoBalancoDFP[0].EbitDFP <= 1000000000)
                        return ticker
                    break
                    case "A1B":
                    if (ticker.ResumoBalancoDFP[0].EbitDFP >= 1000000000)
                        return ticker
                    break
            }
        } catch {}
    },

    LUCROLIQUIDO: (ticker, LUCROLIQUIDO) => {
        if (!LUCROLIQUIDO || LUCROLIQUIDO == "undefined")
            return ticker
        try {
            switch (LUCROLIQUIDO) {
                case "AT1B":
                    if (ticker.ResumoBalancoDFP[0].LucroLiquidoDFP <= 1000000000)
                        return ticker
                    break
                case "AT100M":
                    if (ticker.ResumoBalancoDFP[0].LucroLiquidoDFP <= 100000000)
                        return ticker
                    break
                case "E100ME1B":
                    if (ticker.ResumoBalancoDFP[0].LucroLiquidoDFP >= 100000000 && ticker.ResumoBalancoDFP[0].LucroLiquidoDFP <= 1000000000)
                        return ticker
                    break
                    case "A1B":
                    if (ticker.ResumoBalancoDFP[0].LucroLiquidoDFP >= 1000000000)
                        return ticker
                    break
            }
        } catch {}
    },

    RECEITALIQUIDA: (ticker, RECEITALIQUIDA) => {
        if (!RECEITALIQUIDA || RECEITALIQUIDA == "undefined")
            return ticker
        try {
            switch (RECEITALIQUIDA) {
                case "AT1B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP <= 1000000000)
                        return ticker
                    break
                case "AT5B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP <= 5000000000)
                        return ticker
                    break
                case "AT10B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP <= 10000000000)
                        return ticker
                    break
                case "E10BE30B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP >= 10000000000 && ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP <= 30000000000)
                        return ticker
                    break
                    case "E30BE60B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP >= 30000000000 && ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP <= 60000000000)
                        return ticker
                    break
                case "A60B":
                    if (ticker.ResumoBalancoDFP[0].ReceitaLiquidaDFP >= 60000000000)
                        return ticker
                    break
            }
        } catch {}
    },

    PL: (ticker, PL) => {
        if (!PL || PL == "undefined")
            return ticker
        try {
            switch (PL) {
                case "I0":
                    if (ticker.indicadores.PL <= 0)
                        return ticker
                    break
                case "I10":
                    if (ticker.indicadores.PL <= 10)
                        return ticker
                    break
                case "I15":
                    if (ticker.indicadores.PL <= 15)
                        return ticker
                    break
                case "I20":
                    if (ticker.indicadores.PL <= 20)
                        return ticker
                    break
                case "I35":
                    if (ticker.indicadores.PL <= 35)
                        return ticker
                    break
                case "I50":
                    if (ticker.indicadores.PL <= 50)
                        return ticker
                    break
                case "A0":
                    if (ticker.indicadores.PL >= 0)
                        return ticker
                    break
                case "A10":
                    if (ticker.indicadores.PL >= 10)
                        return ticker
                    break
                case "A20":
                    if (ticker.indicadores.PL >= 20)
                        return ticker
                    break
                case "A35":
                    if (ticker.indicadores.PL >= 35)
                        return ticker
                    break
                case "A50":
                    if (ticker.indicadores.PL >= 50)
                        return ticker
                    break
            }
        } catch {}
    },

    MARGEMLIQUIDA: (ticker, MARGEMLIQUIDA) => {
        if (!MARGEMLIQUIDA || MARGEMLIQUIDA == "undefined")
            return ticker
        try {
            switch (MARGEMLIQUIDA) {
                case "I10":
                    if (ticker.indicadores.MargemLiquida <= -10)
                        return ticker
                    break
                case "E10E20":
                    if (ticker.indicadores.MargemLiquida >= 10 && ticker.indicadores.MargemLiquida <= 20)
                        return ticker
                    break
                case "E20E35":
                    if (ticker.indicadores.MargemLiquida >= 20 && ticker.indicadores.MargemLiquida <= 35)
                        return ticker
                    break
                case "A35":
                    if (ticker.indicadores.MargemLiquida >= 35)
                        return ticker
                    break
            }
        } catch {}
    },

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
                    if (ticker.indicadores.LiquidezImediata < 1) {
                        return ticker
                    }
                    break;
                case "I1":
                    if (Math.round(ticker.indicadores.LiquidezImediata) == 1) {
                        return ticker
                    }
                    break;
                case "A1":
                    if (ticker.indicadores.LiquidezImediata > 1) {
                        return ticker
                    }
                    break;
            }
        } catch {}
    }
}