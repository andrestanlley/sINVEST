import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import TickerDetail from "../../components/TickerDetails/TickerDetails"

export default function About() {
    const { ticker } = useParams()

    return (
        <div>
            <Header />
            <TickerDetail acao={ticker} />
        </div>
    )
}