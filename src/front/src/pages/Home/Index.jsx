import Ads from "../../components/Ads/Ads";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LastView from "../../components/LastView/LastView";
import Panel from "../../components/Panel/Panel";



export default function Home() {
  return (
      <>
        <Header />
        <Panel/>
        <LastView/>
        <Ads/>
        <Footer/>
      </>
  )
}