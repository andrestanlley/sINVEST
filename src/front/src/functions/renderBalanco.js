export default function renderBalanco(ticker, desc, index){
    switch (index) {
        case 0:
          return (ticker.ResumoBalancoDFP[0][desc]/1000000).toLocaleString("pt-BR", {minimumFractionDigits: 3}) + " M"
        default:
          return ticker.ResumoBalancoDFP[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}