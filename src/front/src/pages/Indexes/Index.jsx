import Header from "../../components/Header/Header"
import SearchTickers from "../../components/SearchTickers/SearchTickers"
import Footer from "../../components/Footer/Footer";
import Meta from "../../components/Metadata/Meta";

export default function Indexes() {
    return (
        <div>
            <Meta
              title="Listados na B3"
              desc="Conheça e filtre os principais ativos listados na bolsa de valores da b3 no brasil, invista com facilidade." />
            <Header />
            <SearchTickers/>
            <Footer/>
        </div>
    )
}