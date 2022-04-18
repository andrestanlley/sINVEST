import { TickerContainer } from './style'
import { Link } from 'react-router-dom';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export function Ticker({ info }) {
    const { name, ticker, variacao, setor } = info;

    let color = variacao > 0 ? "var(--verde)" : "red"
    let symbol = variacao > 0 ? <AiFillCaretUp/> : <AiFillCaretDown/>
    return (
        <Link to={`/sobre/${ticker}`}>
            <TickerContainer>
                <div>
                    <h2> {ticker} </h2>
                    <span style={{
                        color: color
                    }}> {symbol} {variacao}% </span>
                </div>
                <p> {name} </p>
                <span>
                    {setor}
                </span>
            </TickerContainer>
        </Link>
    )
}