export default function renderBalanco(ticker, desc, index){
    switch (index) {
        case 0:
          return (ticker[desc]/1000).toLocaleString("pt-BR") 
        default:
          return ticker[desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}