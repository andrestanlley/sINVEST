import { useState, useEffect } from 'react';
import { Ticker } from '../components/Ticker';
import axios from 'axios'
import '../style/tickerListing.css';

export default function TickerListing() {
  const [data, setData] = useState([]);
  
  useEffect(async() => {
    const response = await axios.get("./data.json");
    setData(response.data.data)
  }, [])

  return (
    <>
      <div className='container-tickers'>
        {data.map(ticker => {
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