import { useParams } from "react-router-dom"
import Header from "../components/Header/Header"
import TickerDetail from "../components/TickerDetails/TickerDetails"

export default function About() {
    const { ticker } = useParams()

    return (
        <div>
            <Header />
            <h1>About page {ticker}</h1>
            <TickerDetail/>
        </div>
    )
}