import { useState, useEffect } from 'react';
import '../style/searchTickers.css'
import TickerListing from './TickerListing'

export default function SearchTickers() {
    const [url, setUrl] = useState('')

    useEffect(() => {
        //função aqui
        }, [url])

    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => setUrl(e.target.value)}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <TickerListing url={url} />
        </div>
    )
}