import './ticker.css'
import { Link } from 'react-router-dom';

export function Ticker({ info }) {
    const { name, ticker, segmento, setor } = info;

    return (
        <Link to={`/sobre/${ticker}`}>
            <div className='card' >
                <div>
                    <h2> {ticker} </h2>
                    <span> {segmento} </span>
                </div>
                <p> {name} </p>
                <span>
                    {setor}
                    </span>
            </div>
        </Link>
    )
}