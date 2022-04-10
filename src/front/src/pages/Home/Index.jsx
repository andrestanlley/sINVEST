import Header from "../../components/Header/Header";
import Panel from "../../components/Panel/Panel";
import SearchTickers from '../../components/SearchTickers/SearchTickers'


export default function Home() {
  return (
      <div>
        <Header />
        <Panel/>
        <SearchTickers/>
      </div>
  )
}