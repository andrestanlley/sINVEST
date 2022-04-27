export default function renderBalanco(ticker, desc, index){
    switch (index) {
        case 0:
          return (ticker.ResumoBalancoDFP[0][desc]).toLocaleString("pt-BR") 
        default:
          return ticker.ResumoBalancoDFP[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })
      }
}