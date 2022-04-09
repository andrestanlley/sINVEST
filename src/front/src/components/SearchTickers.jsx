import '../style/searchTickers.css'
import TickerListing from './TickerListing'

export default function SearchTickers() {
    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker'></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <TickerListing />
        </div>
    )
}