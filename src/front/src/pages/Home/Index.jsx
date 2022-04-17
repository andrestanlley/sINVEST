import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LastView from "../../components/LastView/LastView";
import Loading from "../../components/Loading/Loading";
import Panel from "../../components/Panel/Panel";



export default function Home() {
  return (
      <>
        <Header />
        <Panel/>
        <LastView/>
        <Footer/>
      </>
  )
}