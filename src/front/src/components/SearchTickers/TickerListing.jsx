import { Ticker } from './Ticker';
import './tickerListing.css';

export default function TickerListing(props) {
  return (
    <>
      <div className='container-tickers'>
        {props.data.map(ticker => {
          return <Ticker key={ticker.name} info={{
            name: ticker.name,
            ticker: ticker.symbol,
            primary_exchange: ticker.stock_exchange.acronym,
            active: ticker.has_eod
          }} />
        })}
      </div>
    </>
  )
}