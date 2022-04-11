import './searchTickers.css'
import TickerListing from './TickerListing'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchTickers() {
    const limiter = 28

    const [search, setSearch] = useState()
    const [data, setData] = useState([]);

    useEffect(async() => {
        const response = await axios.get("./api/tickers"); // https://api-cotacao-b3.labdo.it/api/empresa
        setData(response.data)
    }, [])

    function handleSearchTicker(busca){
        setSearch( data.filter( ( value ) => value.DescricaoDoAtivo[0].Codigo.includes(busca.toUpperCase()) 
        || value.DescricaoDoAtivo[0].NomeMercado.includes(busca.toUpperCase()))).slice(0,limiter)
    }

    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => handleSearchTicker(e.target.value)}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <TickerListing data={ search ? search : data.slice(0,limiter) } />
        </div>
    )
}