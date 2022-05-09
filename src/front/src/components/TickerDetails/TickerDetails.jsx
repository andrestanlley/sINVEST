import React, { useEffect, useState } from 'react'
import { TickerDetails } from './styles'
import axios from 'axios'
import Loading from '../Loading/Loading'
import ValorDeMercado from './ValorDeMercado';
import Oscilacoes from './Oscilacoes';
import Cotacoes from './Cotacoes';
import ResumoBalanco from './ResumoBalanco';
import DadosGerais from './DadosGerais';
import Meta from '../Metadata/Meta';
import Indicadores from './Indicadores';

export default function TickerDetail(props) {
  const [ticker, SetTicker] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
    const getTicker = async () => {
      const res = await axios.get(`../../api/ticker/${props.acao}`, { headers: { "reactAuth": (Math.random() * 1000) } }); //
      SetTicker(res.data)
    }
    getTicker()
  }, [])


  return (
    <div className='bodylimiter'>
      <TickerDetails>
        {!ticker && (
          <Loading />
        )}
        {ticker &&
          <div>
            <Meta
              title={ticker.DescricaoDoAtivo[0]}
              desc={ticker.InfoEmpresaDadosGerais[0]} />
            {ticker.ClassificacaoSetorial[0] && (
              <DadosGerais
                DescricaoDoAtivo={ticker.DescricaoDoAtivo[0]}
                DadosEmpresa={ticker.InfoEmpresaDadosGerais[0]}
                ClassificacaoSetorial={ticker.ClassificacaoSetorial[0]} />
            )}
            {ticker.ValorDeMercado[0] && (
              <ValorDeMercado
                valor={ticker.ValorDeMercado[0].ValorDeMercado} />
            )}
            {ticker.Oscilacoes[0] && (
              <Oscilacoes
                data={ticker.Oscilacoes} />
            )}
            {ticker.Cotacoes[0] && (
              <Cotacoes
                Cotacoes={ticker.Cotacoes[0]} />
            )}
            {ticker.ResumoBalancoDFP[0] && (
              <ResumoBalanco
                Balanco={ticker.ResumoBalancoDFP[0]} />
            )}
            {ticker.indicadores && (
              <Indicadores data={ticker.indicadores} />
            )}
          </div>
        }
      </TickerDetails>
    </div>
  )
}