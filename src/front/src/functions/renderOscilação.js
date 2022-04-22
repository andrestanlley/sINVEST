export default function renderOscilacao(ticker, desc, index){
    switch (index) {
        case 5:
          return ticker.Cotacoes[0][desc]+" %"
        case 6:
          return (ticker.Cotacoes[0][desc]/1000).toFixed(2) + " M"
        case 7:
            return (ticker.Cotacoes[0][desc]/1000000).toFixed(2)+" M"
        default:
          return ticker.Cotacoes[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}