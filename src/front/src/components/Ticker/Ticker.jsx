import { TickerContainer } from './style'
import { Link } from 'react-router-dom';
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export function Ticker({ info }) {
    const { name, ticker, variacao, setor, marketcap, pl } = info;

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
                <span>{setor}</span>   
                <div>
                    <h2> MC {marketcap/1000000000 > 0 ? (marketcap/1000000000).toFixed(2) + "B" : (marketcap/1000000).toFixed(2) + "M"} </h2>
                    <h2> PL {pl/1000000000 > 0 ? (pl/1000000000).toFixed(2) + "B" : (pl/1000000).toFixed(2) + "M"} </h2>
                </div>
            </TickerContainer>
        </Link>
    )
}