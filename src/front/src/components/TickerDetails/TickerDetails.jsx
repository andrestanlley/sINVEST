import { useEffect, useState } from 'react'
import { TickerDetails } from './styles'
import axios from 'axios'

export default function TickerDetail(props) {
  const [ticker, SetTicker] = useState()

  useEffect(() => {
    const getTicker = async () => {
      const res = await axios.get(`/api/ticker/${props.ticker}`);
      SetTicker(res.data)
    }
    getTicker()
  }, [])

  return (
    <TickerDetails>
      {ticker &&
        <div>
          <p>Ticker: {ticker.DescricaoDoAtivo[0].Codigo}</p>
          <p>Classificacao Setorial: {ticker.ClassificacaoSetorial[0].Setor}</p>
          <h1>Oscilações</h1>
          {ticker.Oscilacoes.map(osc => {
            return <p key={osc.Var}>Periodo: {osc.Oscilacao} Var: {osc.Var}</p>
          })}
          <h1>Cotacoes</h1>
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
          <h1>Resumo Balanço DFP</h1>
          <p>Data do ultimo balanco: {ticker.ResumoBalancoDFP[0].DataUltBalanco}</p>
          <p>Nº Ações: {ticker.ResumoBalancoDFP[0].NumAcoes}</p>
          <p>Ativo: {ticker.ResumoBalancoDFP[0].Ativo}</p>
          <p>Disponibilidade: {ticker.ResumoBalancoDFP[0].Disponibilidades}</p>
          <p>Ativo circulante: {ticker.ResumoBalancoDFP[0].AtivoCirculante}</p>
          <p>DividaBruta: {ticker.ResumoBalancoDFP[0].DividaBruta}</p>
          <p>DividaLiquida: {ticker.ResumoBalancoDFP[0].DividaLiquida}</p>
          <p>Patrimonio Liquido: {ticker.ResumoBalancoDFP[0].PatrimonioLiquido}</p>
          <h1>Valor de mercado</h1>
          <p>Valor de Mercado: {ticker.ValorDeMercado[0].ValorDeMercado}</p>
          <p>Valor da Firma: {ticker.ValorDeMercado[0].ValorDaFirma}</p>
          <h1>Dados gerais</h1>
          <p>Cod CVM: {ticker.InfoEmpresaDadosGerais[0].CodCvm}</p>
          <p>Data: {ticker.InfoEmpresaDadosGerais[0].Data}</p>
          <p>Nome empresarial: {ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial}</p>
          <p>CNPJ: {ticker.InfoEmpresaDadosGerais[0].CNPJ}</p>
          <p>Atividade: {ticker.InfoEmpresaDadosGerais[0].DescricaoAtividade}</p>
          <p>Data: {ticker.InfoEmpresaDadosGerais[0].Data}</p>
          <p>Site: {ticker.InfoEmpresaDadosGerais[0].Site}</p>
        </div>
      }
    </TickerDetails>
  )
}