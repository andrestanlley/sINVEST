import '../style/ticker.css'

export function Ticker({data}){
    const { name, ticker, primary_exchange, active} = data;

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