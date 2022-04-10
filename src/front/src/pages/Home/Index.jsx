import Header from "../../components/Header/Header";
import Panel from "../../components/Panel/Panel";
import SearchTickers from '../../components/SearchTickers/SearchTickers'

import TickerDetail from "../../components/TickerDetails/TickerDetails";

export default function Home() {
  return (
      <div>
        <Header />
        <Panel/>
        <SearchTickers/>
        <TickerDetail/>
      </div>
  )
}