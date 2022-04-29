export default function renderOscilacao(ticker, desc, index){
    switch (index) {
        case 5:
          return ticker.Cotacoes[0][desc]+" %"
        case 6:
          return ticker.Cotacoes[0][desc].toLocaleString("pt-BR")
        case 8:
          const volume = ticker.Cotacoes[0][desc]/1000000000 > 1 ? ticker.Cotacoes[0][desc]/1000000000 : ticker.Cotacoes[0][desc]/1000000
          const sufix = volume/1000000000 > 1 ? " B" : " M"
          return volume.toFixed(2) + sufix
        default:
          return ticker.Cotacoes[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}