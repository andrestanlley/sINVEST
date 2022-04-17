import { TickerContainer } from './style'
import { Link } from 'react-router-dom';

export function Ticker({ info }) {
    const { name, ticker, variacao, setor } = info;

    let color = variacao > 0 ? "green" : "red"
    return (
        <Link to={`/sobre/${ticker}`}>
            <TickerContainer>
                <div>
                    <h2> {ticker} </h2>
                    <span style={{
                        color: color
                    }}> {variacao} </span>
                </div>
                <p> {name} </p>
                <span>
                    {setor}
                </span>
            </TickerContainer>
        </Link>
    )
}