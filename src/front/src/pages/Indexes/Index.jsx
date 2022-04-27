import Header from "../../components/Header/Header"
import SearchTickers from "../../components/SearchTickers/SearchTickers"
import Footer from "../../components/Footer/Footer";
import Ads from "../../components/Ads/Ads";

export default function Indexes() {
    return (
        <div>
            <Header />
            <Ads/>
            <SearchTickers/>
            <Ads/>
            <Footer/>
        </div>
    )
}