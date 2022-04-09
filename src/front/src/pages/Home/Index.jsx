import Header from "../../components/Header";
import Panel from "../../components/Panel";
import SearchTickers from '../../components/SearchTickers'

import TickerDetail from "../../components/TickerDetails";

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