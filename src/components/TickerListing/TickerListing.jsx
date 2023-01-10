import Loading from '../Loading/Loading';
import { Ticker } from '../Ticker/Ticker';
import { TickerListingContainer } from './style';

export default function TickerListing({ data }) {
  const limiter = 56
  return (
    <>
      <TickerListingContainer>
        {!data.length && <Loading />}
        {data.slice(0, limiter).map((ticker, index) => {
          try {
            return (
              <Ticker
                key={index}
                info={{
                  image: ticker.logo,
                  name: ticker.name,
                  ticker: ticker.stock,
                  variacao: ticker.change,
                  setor: ticker.sector,
                  marketcap: ticker.market_cap,
                  volume: ticker.volume,
                }}
              />
            );
          } catch (error) {}
        })}
      </TickerListingContainer>
    </>
  );
}
