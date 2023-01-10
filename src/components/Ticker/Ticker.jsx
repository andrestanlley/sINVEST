import { TickerContainer } from './style';
import { Link } from 'react-router-dom';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import moneyInText from '../../functions/moneyInText';

export function Ticker({ info }) {
  const { image, name, ticker, variacao, setor, marketcap, volume } = info;

  let color = variacao > 0 ? 'var(--verde)' : 'red';
  let symbol = variacao > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />;
  return (
    <Link to={`/sobre/${ticker}`}>
      <TickerContainer>
        <div>
          <div>
            <img src={image} className="logocompany" />
            <h2> {ticker} </h2>
          </div>
          <span
            style={{
              color: color,
            }}
          >
            {symbol} {variacao.toFixed(2)}%
          </span>
        </div>
        <p> {name}</p>
        {marketcap && volume && (
          <div
            style={{
              opacity: 0.6,
              fontWeight: 400,
            }}
          >
            <h2>MC {moneyInText(marketcap)}</h2>
            <h2>VL {(volume / 1000).toFixed(0)} K</h2>
          </div>
        )}
        <span>{setor}</span>
      </TickerContainer>
    </Link>
  );
}
