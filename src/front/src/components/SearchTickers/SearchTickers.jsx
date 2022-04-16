import './searchTickers.css'
import TickerListing from './TickerListing'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SearchTickers() {
    const [search, setSearch] = useState()
    const [data, setData] = useState([]);
    const [firstSeletor, setFirstSeletor] = useState(0)
    const [secondSeletor, setSecondSeletor] = useState(0)
    const [lastSeletor, setLastSeletor] = useState(0)

    useEffect(async () => {
        const response = await axios.get("./api/tickers"); // https://api-cotacao-b3.labdo.it/api/empresa
        setData(response.data)
    }, [])


    function handleSeletorFilter(e) {
        // Função de busca por digitação
        if (e.search) {
            let busca = e.search
            setSearch(data.filter((value) => value.DescricaoDoAtivo[0].Codigo.includes(busca.toUpperCase())
                || value.DescricaoDoAtivo[0].NomeMercado.includes(busca.toUpperCase())))
        }

        switch (e.target.name) {
            case "SEL1":
                setFirstSeletor(e.target.value)
                break;
            case "SEL2":
                setSecondSeletor(e.target.value)
                break;
            case "SEL3":
                setLastSeletor(e.target.value)
                break;
        }

        setSearch(data.map((value) => {
            if(value.ValorDeMercado[0]){
                if (value.ValorDeMercado[0].ValorDeMercado >= firstSeletor) {
                    return value
                }
            }
        }))
    }


    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => handleSeletorFilter({ search: e.target.value })}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <form onChange={e => handleSeletorFilter(e)}>
                <select name="SEL1" id="">
                    <option value="10000">Valor 1</option>
                    <option value="100000" selected>Valor 2</option>
                    <option value="433000000000">Valor 3</option>
                </select>
                <select name="SEL2" id="">
                    <option value="valor1">Valor 24</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
                <select name="SEL3" id="">
                    <option value="valor1">Valor 1</option>
                    <option value="valor2" selected>Valor 2</option>
                    <option value="valor3">Valor 3</option>
                </select>
            </form>
            <TickerListing data={search ? search : data} />
        </div>
    )
}