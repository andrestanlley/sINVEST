import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import TickerDetail from "../../components/TickerDetails/TickerDetails"
import Footer from '../../components/Footer/Footer'

export default function About() {
    const { ticker } = useParams()


    return (
        <div>
            <Header />
            <TickerDetail Ticker={ticker} />
            <Footer />
        </div>
    )
}