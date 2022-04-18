import React, { useEffect, useState, PureComponent } from 'react'
import { TickerDetails } from './styles'
import { MdLabel } from "react-icons/md";
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import axios from 'axios'
import Loading from '../Loading/Loading'

export default function TickerDetail(props) {
  const [ticker, SetTicker] = useState()

  useEffect(() => {
    const getTicker = async () => {
      const res = await axios.get(`../api/ticker/${props.acao}`); //
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
            {ticker.ClassificacaoSetorial[0] && (
              <section>
                <p id='TICKER'>{ticker.DescricaoDoAtivo[0].Codigo}</p>
                <p id='NOMEEMPRESA'>{ticker.InfoEmpresaDadosGerais[0] ? ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial : ticker.DescricaoDoAtivo[0].NomeMercado}</p>
                <p id='SETOR'>{ticker.ClassificacaoSetorial[0].Setor} • {ticker.InfoEmpresaDadosGerais[0]?.EspeciControle}</p>
                <p id='DESCRICAO'>{ticker.InfoEmpresaDadosGerais[0]?.DescricaoAtividade}</p>
                {ticker.InfoEmpresaDadosGerais[0] &&(
                <div id='CVM-CNPJ'>
                  <p>Cod CVM <p>{ticker.InfoEmpresaDadosGerais[0]?.CodCvm}</p></p>
                  <p>CNPJ <p>{ticker.InfoEmpresaDadosGerais[0]?.CNPJ}</p></p>
                </div>
                )}
                  <a href={ticker.InfoEmpresaDadosGerais[0]?.Site.indexOf("//") > 0 ? ticker.InfoEmpresaDadosGerais[0]?.Site : `http://${ticker.InfoEmpresaDadosGerais[0]?.Site}`} id="SITE" target="_blank"><MdLabel className='icon' />{ticker.InfoEmpresaDadosGerais[0]?.Site}    </a>
              </section>
            )}
            {ticker.ResumoBalancoDFP[0] && (
              <section>
                <h1>Resumo Balanço DFP</h1>
                <p>Data do ultimo balanco: {ticker.ResumoBalancoDFP[0].DataUltBalanco}</p>
                <p>Nº Ações: {ticker.ResumoBalancoDFP[0].NumAcoes}</p>
                <p>Ativo: {ticker.ResumoBalancoDFP[0].Ativo}</p>
                <p>Disponibilidade: {ticker.ResumoBalancoDFP[0].Disponibilidades}</p>
                <p>Ativo circulante: {ticker.ResumoBalancoDFP[0].AtivoCirculante}</p>
                <p>DividaBruta: {ticker.ResumoBalancoDFP[0].DividaBruta}</p>
                <p>DividaLiquida: {ticker.ResumoBalancoDFP[0].DividaLiquida}</p>
                <p>Patrimonio Liquido: {ticker.ResumoBalancoDFP[0].PatrimonioLiquido}</p>
              </section>
            )}
            {ticker.Oscilacoes[0] && (
              <section id='OSCILACOES'>
                <h1>Oscilações</h1>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={ticker.Oscilacoes}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Oscilacao" scale="band" /><YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend />
                    <Bar dataKey="Var" name='Variação (%)' barSize={30} fill="var(--verde)" />
                  </ComposedChart>
                </ResponsiveContainer>
              </section>
            )}
            {ticker.Cotacoes[0] && (
              <section>
                <h1>Cotações</h1>
                <p>Data: {ticker.Cotacoes[0].Data}</p>
                <p>Abe: {ticker.Cotacoes[0].Abe}</p>
                <p>Max: {ticker.Cotacoes[0].Max}</p>
                <p>Min: {ticker.Cotacoes[0].Min}</p>
                <p>Fec: {ticker.Cotacoes[0].Fec}</p>
                <p>Med: {ticker.Cotacoes[0].Med}</p>
                <p>Var: {ticker.Cotacoes[0].Var}</p>
                <p>NNeg: {ticker.Cotacoes[0].NNeg}</p>
                <p>QTot: {ticker.Cotacoes[0].QTot}</p>
                <p>VTot: {ticker.Cotacoes[0].VTot}</p>
              </section>
            )}
            {ticker.ValorDeMercado[0] && (
              <section>
                <h1>Valor de mercado</h1>
                <p>Valor de Mercado: {ticker.ValorDeMercado[0].ValorDeMercado}</p>
                <p>Valor da Firma: {ticker.ValorDeMercado[0].ValorDaFirma}</p>
              </section>
            )}
          </div>
        }
      </TickerDetails>
    </div>
  )
}