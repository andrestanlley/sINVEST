import './ticker.css'

export function Ticker({info}){
    const { name, ticker, primary_exchange, active} = info;

    return(
       <div className='card' >
            <div>
                <h2> {ticker} </h2>
                <span> {primary_exchange} </span>
            </div>
            <p> {name} </p>
            <span
                className= { active ? "active" : "inative"}
            >{active ? "Ativo" : "Inativo"}</span>
       </div>
    )
}