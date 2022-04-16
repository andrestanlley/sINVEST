import './searchTickers.css'
import TickerListing from './TickerListing'
import { useEffect, useState } from 'react'
import Select from 'react-select';
import axios from 'axios'

export default function SearchTickers() {
    const [search, setSearch] = useState()
    const [data, setData] = useState([]);
    const [firstSeletor, setFirstSeletor] = useState()
    const [secondSeletor, setSecondSeletor] = useState()
    const [lastSeletor, setLastSeletor] = useState()

    useEffect(async () => {
        const BASEURL = "./api/tickers"
        const URL = `${BASEURL}?${firstSeletor}&${secondSeletor}&${lastSeletor}`
        const response = await axios.get(URL); // https://api-cotacao-b3.labdo.it/api/empresa
        setData(response.data)
    }, [firstSeletor, secondSeletor, lastSeletor])

    const VALORDEMERCADO = [
        { value: '', label: 'VALOR DE MERCADO' }
    ];

    const VOLUMEDIARIOMEDIO = [
        { value: '', label: 'VOLUME DIARIO MEDIO' }
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
        { value: '', label: 'Liquidez imeadiata' }
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
        setSearch(data.filter((value) => value.DescricaoDoAtivo[0].Codigo.includes(busca.toUpperCase()) || value.DescricaoDoAtivo[0].NomeMercado.includes(busca.toUpperCase())))
    }

    function handleSeletorFilter(e) {
        switch (e.target.name) {
            case "SEL1":
                setFirstSeletor(`${e.target.name}=${e.target.value}`)
                break;
            case "SEL2":
                setSecondSeletor(`${e.target.name}=${e.target.value}`)
                break;
            case "SEL3":
                setLastSeletor(`${e.target.name}=${e.target.value}`)
                break;

            default:
                break;
        }
    }


    return (
        <div className='search-container'>
            <div id='searchTickers'>
                <input type="text" placeholder='Buscar ticker' onChange={e => handleSearchTicker(e.target.value)}></input>
                <img src="./assets/imgs/lupa.png" alt="Lupa" />
            </div>
            <form onChangeCapture={e => handleSeletorFilter(e)}>
                <Select
                    value={VARSEMANAL.value}
                    options={VARSEMANAL}
                    defaultValue={VARSEMANAL[0]}
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
                />
                <Select
                    value={VOLUMEDIARIOMEDIO.value}
                    options={VOLUMEDIARIOMEDIO}
                    defaultValue={VOLUMEDIARIOMEDIO[0]}
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
        </div>
    )
}