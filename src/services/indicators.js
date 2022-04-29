exports.add = (ticker)=>{
    try {
        return {
            ROE: parseFloat(ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP / ticker.ResumoBalancoDFP[0]?.PatrimonioLiquido * 100).toFixed(2),
            LiquidezCorrente: parseFloat(ticker.ResumoBalancoDFP[0]?.AtivoCirculante / ticker.ResumoPrincipaisConta?.Passivo[1].UltExe).toFixed(2),
            LiquidezImediata: parseFloat(ticker.ResumoBalancoDFP[0]?.Disponibilidades / ticker.ResumoPrincipaisConta?.Passivo[1].UltExe).toFixed(2),
            PL: parseFloat(ticker.ValorDeMercado[0]?.ValorDeMercado / ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP).toFixed(2),
            MargemLiquida: parseFloat(ticker.ResumoBalancoDFP[0]?.LucroLiquidoDFP / ticker.ResumoBalancoDFP[0]?.ReceitaLiquidaDFP * 100).toFixed(2),
            MargemEbit: parseFloat(ticker.ResumoBalancoDFP[0]?.EbitDFP / ticker.ResumoBalancoDFP[0]?.ReceitaLiquidaDFP * 100).toFixed(2),
            Alavancagem: parseFloat(ticker.ResumoBalancoDFP[0]?.DividaLiquida / ticker.ResumoBalancoDFP[0]?.EbitDFP).toFixed(2)
        }
    } catch {}
}