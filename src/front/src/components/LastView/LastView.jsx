import { useEffect, useState } from "react"
import { Ticker } from "../../components/SearchTickers/Ticker"
import { LastViewContainer } from "./styles"
import axios from 'axios'

export default function LastView() {
    const [lastView, setLastView] = useState([])

    useEffect(() => {
        const getLastView = async () => {
            const result = await axios.get("/api/lastview")
            setLastView(result.data)
        }
        getLastView()
    }, [setLastView])

    return (
        <LastViewContainer>
            <h1>Vistos recentemente</h1>
            <div className='container-tickers'>
                {lastView.map(ticker => {
                    return <Ticker key={ticker.id} info={{
                        name: ticker.nm_empresa,
                        ticker: ticker.cd_acao ? ticker.cd_acao : ticker.cd_acao_rdz,
                        segmento: ticker.segmento_b3,
                        setor: ticker.setor_economico
                    }} />
                })}
            </div>
        </LastViewContainer>
    )
}