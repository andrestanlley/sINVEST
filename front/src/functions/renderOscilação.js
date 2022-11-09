import moneyInText from "./moneyInText"

export default function renderOscilacao(ticker, desc, index){
    switch (index) {
        case 5:
          return ticker[desc]+" %"
        case 6:
          return ticker[desc].toLocaleString("pt-BR")
        case 8:
          return moneyInText(ticker[desc])
        default:
          return ticker[desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}