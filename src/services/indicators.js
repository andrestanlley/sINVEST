exports.add = (ticker)=>{
    try {
        return {
            ROE: ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP / ticker.ResumoBalancoDFP[0]?.PatrimonioLiquido * 100,
            LiquidezCorrente: ticker.ResumoBalancoDFP[0]?.AtivoCirculante / ticker.ResumoPrincipaisConta?.Passivo[1].UltExe,
            LiquidezImediata: ticker.ResumoBalancoDFP[0]?.Disponibilidades / ticker.ResumoPrincipaisConta?.Passivo[1].UltExe,
            PL: ticker.ValorDeMercado[0]?.ValorDeMercado / ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP,
            MargemLiquida: ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP / ticker.ResumoBalancoDFP[0]?.ReceitaLiquidaDFP * 100,
            MargemEbit: ticker.ResumoBalancoDFP[0]?.EbitDFP / ticker.ResumoBalancoDFP[0]?.ReceitaLiquidaDFP * 100,
            Alavancagem: ticker.ResumoBalancoDFP[0]?.DividaLiquida / ticker.ResumoBalancoDFP[0]?.EbitDFP
        }
    } catch {}
}