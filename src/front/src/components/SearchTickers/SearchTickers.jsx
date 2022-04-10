import './searchTickers.css'
import TickerListing from './TickerListing'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchTickers() {
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);

    useEffect(async() => {
        const response = await axios.get("https://api-cotacao-b3.labdo.it/api/empresa");
        setData(response.data.data)
        console.log(search)
      }, [search])

    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => setSearch(e.target.value)}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <TickerListing data={data} />
        </div>
    )
}