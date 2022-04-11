import { Ticker } from './Ticker';
import './tickerListing.css';

export default function TickerListing(props) {
  return (
    <>
      <div className='container-tickers'>
        {props.data.map(ticker => {
          if (ticker.cd_acao.split(",").length > 1) {
            return ticker.cd_acao.split(",").map(tick => {
              return <Ticker key={ticker.id+Math.random()} info={{
                name: ticker.nm_empresa,
                ticker: tick.trim(),
                segmento: ticker.segmento_b3,
                setor: ticker.setor_economico
              }} />
            })
          } else {
            return <Ticker key={ticker.id} info={{
              name: ticker.nm_empresa,
              ticker: ticker.cd_acao ? ticker.cd_acao : ticker.cd_acao_rdz,
              segmento: ticker.segmento_b3,
              setor: ticker.setor_economico
            }} />
          }
        })}
      </div>
    </>
  )
}