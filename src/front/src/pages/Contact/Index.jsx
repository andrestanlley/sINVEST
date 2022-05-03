import Ads from "../../components/Ads/Anuncios";
import ContactContainer from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

export default function Contact() {
    return (
        <>
            <Header />
            <Ads/>
            <ContactContainer/>
            <Ads/>
            <Footer />
        </>
    )
}