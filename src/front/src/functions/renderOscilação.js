export default function renderOscilacao(ticker, desc, index){
    switch (index) {
        case 5:
          return ticker.Cotacoes[0][desc]+" %"
        case 6:
          return ticker.Cotacoes[0][desc].toLocaleString("pt-BR")
        case 8:
          return (ticker.Cotacoes[0][desc]/1000000000).toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }) + " B"
        default:
          return ticker.Cotacoes[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}