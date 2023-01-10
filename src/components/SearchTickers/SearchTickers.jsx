import TickerListing from '../TickerListing/TickerListing';
import { useEffect, useState } from 'react';
import { SearchTickersContainer } from './style';
import lupa from '../../assets/images/lupa.png'
import { Filters } from './Filters';
import Select from 'react-select';
import Loading from '../Loading/Loading';
import { getTickers } from '../../services/api';

export default function SearchTickers() {
  const [search, setSearch] = useState();
  const [data, setData] = useState([]);

  useEffect(async () => {
    window.scrollTo(0, 0);
    const response = await getTickers();
    setData(response.data.stocks);
  }, []);

  function handleSearchTicker(busca) {
    // Função de busca por digitação
    setSearch(
      data.filter(
        (ticker) =>
          ticker.stock.includes(busca.toUpperCase()) ||
          ticker.name.includes(busca.toUpperCase())
      )
    );
  }

  function handleSeletorFilter(seletor) {
    console.log(seletor)
  }

  return (
    <div className="bodylimiter">
      <SearchTickersContainer>
        <div id="searchTickers">
          <input
            type="text"
            placeholder="Buscar ticker"
            onChange={(e) => handleSearchTicker(e.target.value)}
          ></input>
          <img src={lupa} alt="Lupa" />
        </div>
        {/* <form>
          {Object.keys(Filters).map((seletor) => {
            return (
              <Select
                key={seletor}
                value={Filters[seletor].value}
                options={Filters[seletor]}
                defaultValue={Filters[seletor][0]}
                onChange={(data) =>
                  handleSeletorFilter({ name: seletor, data })
                }
              />
            );
          })}
        </form> */}
        <TickerListing data={search ? search : data} />
      </SearchTickersContainer>
    </div>
  );
}
