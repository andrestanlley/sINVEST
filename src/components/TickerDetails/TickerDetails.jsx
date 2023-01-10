import React, { useEffect, useState } from 'react';
import { TickerDetails } from './styles';
import Loading from '../Loading/Loading';
import ValorDeMercado from './ValorDeMercado';
import Oscilacoes from './Oscilacoes';
import Cotacoes from './Cotacoes';
import ResumoBalanco from './ResumoBalanco';
import DadosGerais from './DadosGerais';
import Indicadores from './Indicadores';
import { getTickerDetail } from '../../services/api';

export default function TickerDetail({ Ticker }) {
  const [ticker, SetTicker] = useState();

  useEffect(async () => {
    window.scrollTo(0, 0);
    const response = await getTickerDetail(Ticker);
    SetTicker(response.data.results[0]);
  }, []);

  return (
    <div className="bodylimiter">
      <TickerDetails>
        {!ticker && <Loading />}
        {ticker && (
          <div>
            {ticker?.symbol && <DadosGerais {...ticker} />}
            {/*
            {ticker.Oscilacoes[0] && <Oscilacoes data={ticker.Oscilacoes} />}
            {ticker.Cotacoes[0] && <Cotacoes Cotacoes={ticker.Cotacoes[0]} />}
            {ticker.ResumoBalancoDFP[0] && (
              <ResumoBalanco Balanco={ticker.ResumoBalancoDFP[0]} />
            )}
            {ticker.indicadores && <Indicadores data={ticker.indicadores} />} */}
          </div>
        )}
      </TickerDetails>
    </div>
  );
}
