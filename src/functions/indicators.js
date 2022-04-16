exports.add = (ticker)=>{
    try {
        return {
            LiquidezCorrente: ticker.ResumoBalancoDFP[0].AtivoCirculante/ticker.ResumoPrincipaisConta.Passivo[1].UltExe,
            LiquidezImediata: ticker.ResumoBalancoDFP[0].Disponibilidades/ticker.ResumoPrincipaisConta.Passivo[1].UltExe
        }
    } catch {}
}