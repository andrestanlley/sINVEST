import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LastView from "../../components/LastView/LastView";
import Meta from "../../components/Metadata/Meta";
import Panel from "../../components/Panel/Panel";
import LastPosts from '../../components/LastPosts/LastPosts'



export default function Home() {
  return (
    <>
      <Meta
        title="Invista com facilidade."
        desc="Dispomos de todas as empresas listadas na Bolsa de Valores Brasileira para você realizar a melhor escolha de investimentos, através dos principais dados corporativos e indicadores econômicos, colhidos do próprio banco de dados da B3 e Comissão de Valores Mobiliários (CVM). Tudo isso de forma clara e simplificada para sua melhor experiência, possibilitando assim uma análise fundamentalista precisa e eficaz." />
      <Header />
      <Panel />
      {/* <LastPosts/> */}
      <LastView />
      <Footer />
    </>
  )
}