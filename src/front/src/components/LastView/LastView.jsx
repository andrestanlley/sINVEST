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
                {lastView.map((ticker, index) => {
                    return <Ticker key={index} info={{
                        name: ticker.name,
                        ticker: ticker.ticker,
                        variacao: ticker.variacao,
                        setor: ticker.setor
                    }} />
                })}
            </div>
        </LastViewContainer>
    )
}