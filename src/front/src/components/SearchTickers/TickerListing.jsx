import { Ticker } from './Ticker';
import './tickerListing.css';

export default function TickerListing(props) {
  return (
    <>
      <div className='container-tickers'>
        {props.data.map(ticker => {
          console.log(ticker)
          return <Ticker key={ticker.id} info={{
            name: ticker.DescricaoDoAtivo[0].NomeMercado,
            ticker: ticker.DescricaoDoAtivo[0].Codigo,
            segmento: ticker.DescricaoDoAtivo[0].NomeMercado.substr(-2),
            setor: ticker.ClassificacaoSetorial[0] ? ticker.ClassificacaoSetorial[0].Setor : "Indisponivel"
          }} />
        })}
      </div>
    </>
  )
}