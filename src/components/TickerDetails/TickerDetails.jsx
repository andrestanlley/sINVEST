import React, { useEffect, useState } from 'react';
import { TickerDetails } from './styles';
import Loading from '../Loading/Loading';
import Oscilacoes from './Oscilacoes';
import { getTickerDetail } from '../../services/api';
import ValorDeMercado from './ValorDeMercado';

export default function TickerDetail({ Ticker }) {
  const [ticker, SetTicker] = useState();

  useEffect(async () => {
    window.scrollTo(0, 0);
    const response = await getTickerDetail(Ticker);
    SetTicker(response.data.results[0]);
  }, []);

  console.log(ticker);

  return (
    <div className="bodylimiter">
      <TickerDetails>
        {!ticker && <Loading />}
        {ticker && (
          <section>
            <div id='HEADER-STOCK'>
              <div>
                <p id="TICKER">{ticker?.symbol}</p>
                <p id="NOMEEMPRESA">
                  <img src={ticker.logourl} /> {ticker?.longName}
                </p>
                <p id="DESCRICAO">{ticker?.Description}</p>
              </div>
              <div>
                <ValorDeMercado value={Number(ticker?.marketCap)} />
              </div>
            </div>
            <Oscilacoes data={ticker.historicalDataPrice} />
          </section>
        )}
      </TickerDetails>
    </div>
  );
}
