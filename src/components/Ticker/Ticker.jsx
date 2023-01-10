import { TickerContainer } from './style';
import { Link } from 'react-router-dom';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';
import moneyInText from '../../functions/moneyInText';

export function Ticker({ logo, name, stock, change, sector, market_cap }) {
  let color = change > 0 ? 'var(--verde)' : 'red';
  let symbol = change > 0 ? <AiFillCaretUp /> : <AiFillCaretDown />;
  return (
    <Link to={`/sobre/${stock}`}>
      <TickerContainer>
        <div>
          <div>
            <img src={logo} className="logocompany" />
            <h2> {stock} </h2>
          </div>
          <span
            style={{
              color,
            }}
          >
            {symbol} {change.toFixed(2)}%
          </span>
        </div>
        <p> {name}</p>
        <div>
          <span>{sector}</span>
          <span>MC {moneyInText(market_cap)}</span>
        </div>
      </TickerContainer>
    </Link>
  );
}
