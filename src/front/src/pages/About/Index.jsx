import { useParams } from "react-router-dom"
import Header from "../../components/Header/Header"
import TickerDetail from "../../components/TickerDetails/TickerDetails"
import Footer from '../../components/Footer/Footer'
import Ads from "../../components/Ads/Ads"

export default function About() {
    const { ticker } = useParams()

    return (
        <div>
            <Header />
            <Ads/>
            <TickerDetail acao={ticker} />
            <Ads/>
            <Footer/>
        </div>
    )
}