import TickerListing from '../TickerListing/TickerListing'
import { useEffect, useState } from 'react'
import {SearchTickersContainer} from './style'
import {Filters} from './Filters';
import Select from 'react-select';
import axios from 'axios'

export default function SearchTickers() {
    const [search, setSearch] = useState()
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("../../api/tickers?")
    const [textBox, setTextBox] = useState("")

    useEffect(async () => {
        const response = await axios.get(url, { headers: { "reactAuth": (Math.random() * 1000)}}); 
        setData(response.data)
    }, [url])


    function handleSearchTicker(busca) {
        setTextBox(busca)
        // Função de busca por digitação
        setSearch(data.filter((value) => 
        value.DescricaoDoAtivo[0].Codigo.includes(busca.toUpperCase()) 
        || value.DescricaoDoAtivo[0].NomeMercado.includes(busca.toUpperCase())))
    }

    function handleSeletorFilter(seletor) {
        if(url.indexOf(seletor.name) < 0){
            setUrl(`${url}${seletor.name}=${seletor.data.value}&`)
        }else{
            let baseUrl = url.split(seletor.name)[0]
            let finalUrl = url.split(seletor.name)[1].split("&")[1]
            setUrl(`${baseUrl}${finalUrl}&${seletor.name}=${seletor.data.value}&`)
        }
        setTextBox("")
    }


    return (
        <div className='bodylimiter'>
            <SearchTickersContainer>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' value={textBox} onChange={e => handleSearchTicker(e.target.value)}></input>
                <img src="../../assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <form>
            {Object.keys(Filters).map(seletor => {
                return <Select
                key={seletor}
                value={Filters[seletor].value}
                options={Filters[seletor]}
                defaultValue={Filters[seletor][0]}
                onChange={data => handleSeletorFilter({name: seletor, data})}
            />
            })}
            </form>
            <TickerListing data={search ? search : data} />
        </SearchTickersContainer>
        </div>
    )
}