import { useEffect, useState } from "react"
import { Ticker } from "../../components/Ticker/Ticker"
import { LastViewContainer } from "./styles"
import {TickerListingContainer} from '../TickerListing/style'

import axios from 'axios'

export default function LastView() {
    const [lastView, setLastView] = useState([])

    useEffect(() => {
        const getLastView = async () => {
            const result = await axios.get("/api/lastview", { headers: { "reactAuth": (Math.random() * 1000)}})
            setLastView(result.data)
        }
        getLastView()
    }, [setLastView])

    return (
        <div className="bodylimiter">
            <LastViewContainer>
                <h1>Vistos recentemente</h1>
                <TickerListingContainer>
                    {lastView.map((ticker, index) => {
                        return <Ticker key={index} info={{
                            name: ticker.name,
                            ticker: ticker.ticker,
                            variacao: ticker.variacao,
                            setor: ticker.setor
                        }} />
                    })}
                    {!lastView.length &&(
                        <h5>Atualizando informações.</h5>
                    )}
                </TickerListingContainer>
            </LastViewContainer>
        </div>
    )
}