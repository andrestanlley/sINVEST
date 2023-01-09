import Loading from '../Loading/Loading';
import { Ticker } from '../Ticker/Ticker';
import { TickerListingContainer } from './style';

export default function TickerListing({ data }) {
  const limiter = 56;
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
                  name: ticker.name,
                  ticker: ticker.ticker,
                  variacao: ticker.type,
                  setor: ticker.market,
                  marketcap: 100000,
                  pl: 100000,
                }}
              />
            );
          } catch (error) {
            console.log(error);
          }
        })}
      </TickerListingContainer>
    </>
  );
}
