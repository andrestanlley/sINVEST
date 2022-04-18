import TickerListing from '../TickerListing/TickerListing'
import { useEffect, useState } from 'react'
import {SearchTickersContainer} from './style'
import Select from 'react-select';
import axios from 'axios'

export default function SearchTickers() {
    const [search, setSearch] = useState()
    const [data, setData] = useState([]);
    const [url, setUrl] = useState("./api/tickers?")

    useEffect(async () => {
        console.log(url)
        const response = await axios.get(url); // https://api-cotacao-b3.labdo.it/api/empresa
        setData(response.data)
    }, [url])

    const VALORDEMERCADO = [
        { value: undefined, label: 'VALOR DE MERCADO' },
        { value: 5000000000, label: 'Acima de 5B' },
        { value: 10000000000, label: 'Acima de 10B' },
        { value: 50000000000, label: 'Acima de 50B' },
        { value: 100000000000, label: 'Acima de 100B' }
    ];

    const SETOR = [
        { value: '', label: 'SETOR' }
    ];

    const PRECODAACAO = [
        { value: '', label: 'PREÇO DA AÇÃO' }
    ];

    const PL = [
        { value: '', label: 'Patrimonio liquido' }
    ];

    const ROE = [
        { value: '', label: 'ROE' }
    ];

    const MARGEMLIQUIDA = [
        { value: '', label: 'Margem liquida' }
    ];

    const MargemEbit = [
        { value: '', label: 'Margem EBIT' }
    ];

    const LiquidezCorrente = [
        { value: '', label: 'Liquidez corrente' }
    ];

    const LiquidezImediata = [
        { value: undefined, label: 'Liquidez imeadiata' },
        { value: "M1", label: 'Abaixo de 1' },
        { value: "I1", label: 'Igual a 1' },
        { value: "A1", label: 'Acima de 1' }
    ];

    const AVALAVANCAGEM = [
        { value: '', label: 'índice de alavancagem' }
    ];

    const LUCROLIQUIDO = [
        { value: '', label: 'Lucro liquido anual' }
    ];

    const FATURAMENTO = [
        { value: '', label: 'Faturamento anual' }
    ];

    const EBITANUAL = [
        { value: '', label: 'EBIT Anual' }
    ];

    const VARSEMANAL = [
        { value: '', label: 'Variacao semanal' }
    ];

    const VARMENSAL = [
        { value: '', label: 'Variacao mensal' }
    ];

    const VAR52SEM = [
        { value: '', label: 'Variação em 52 semanas' }
    ];

    function handleSearchTicker(busca) {
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
            let finalUrl = url.split(seletor.name)[1]
            setUrl(`${baseUrl}${finalUrl}&${seletor.name}=${seletor.data.value}`)
        }
    }


    return (
        <div className='bodylimiter'>
            <SearchTickersContainer>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => handleSearchTicker(e.target.value)}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <form>
                <Select
                    value={VARSEMANAL.value}
                    options={VARSEMANAL}
                    defaultValue={VARSEMANAL[0]}
                    onChange={e => handleSeletorFilter(e)}
                />
                <Select
                    value={VARMENSAL.value}
                    options={VARMENSAL}
                    defaultValue={VARMENSAL[0]}
                />
                <Select
                    value={VAR52SEM.value}
                    options={VAR52SEM}
                    defaultValue={VAR52SEM[0]}
                />
                <Select
                    value={VALORDEMERCADO.value}
                    options={VALORDEMERCADO}
                    defaultValue={VALORDEMERCADO[0]}
                    onChange={data => handleSeletorFilter({name: "VALORDEMERCADO", data})}
                />
                <Select
                    value={SETOR.value}
                    options={SETOR}
                    defaultValue={SETOR[0]}
                />
                <Select
                    value={PRECODAACAO.value}
                    options={PRECODAACAO}
                    defaultValue={PRECODAACAO[0]}
                />
                <Select
                    value={PL.value}
                    options={PL}
                    defaultValue={PL[0]}
                />
                <Select
                    value={ROE.value}
                    options={ROE}
                    defaultValue={ROE[0]}
                />
                <Select
                    value={MARGEMLIQUIDA.value}
                    options={MARGEMLIQUIDA}
                    defaultValue={MARGEMLIQUIDA[0]}
                />
                <Select
                    value={MargemEbit.value}
                    options={MargemEbit}
                    defaultValue={MargemEbit[0]}
                />
                <Select
                    value={LiquidezCorrente.value}
                    options={LiquidezCorrente}
                    defaultValue={LiquidezCorrente[0]}
                />
                <Select
                    value={LiquidezImediata.value}
                    options={LiquidezImediata}
                    defaultValue={LiquidezImediata[0]}
                    onChange={data => handleSeletorFilter({name: "LIQUIDEZIMEDIATA", data})}
                />
                <Select
                    value={AVALAVANCAGEM.value}
                    options={AVALAVANCAGEM}
                    defaultValue={AVALAVANCAGEM[0]}
                />
                <Select
                    value={LUCROLIQUIDO.value}
                    options={LUCROLIQUIDO}
                    defaultValue={LUCROLIQUIDO[0]}
                />
                <Select
                    value={FATURAMENTO.value}
                    options={FATURAMENTO}
                    defaultValue={FATURAMENTO[0]}
                />
                <Select
                    value={EBITANUAL.value}
                    options={EBITANUAL}
                    defaultValue={EBITANUAL[0]}
                />
            </form>
            <TickerListing data={search ? search : data} />
        </SearchTickersContainer>
        </div>
    )
}