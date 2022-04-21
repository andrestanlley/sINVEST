import { Ticker } from '../Ticker/Ticker';
import {TickerListingContainer} from './style'

export default function TickerListing(props) {
  const limiter = 56
  return (
    <>
      <TickerListingContainer>
        {props.data.slice(0, limiter).map((ticker, index) => {
          try{
            return <Ticker key={index} info={{
              name: ticker.InfoEmpresaDadosGerais[0] ? ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial : ticker.DescricaoDoAtivo[0].NomeMercado,
              ticker: ticker.DescricaoDoAtivo[0].Codigo,
              variacao: ticker.Oscilacoes[0] ? ticker.Oscilacoes[0].Var : "",
              setor: ticker.ClassificacaoSetorial[0] ? ticker.ClassificacaoSetorial[0].Setor : "Indisponivel",
              marketcap: ticker.ValorDeMercado[0]?.ValorDeMercado,
              pl: ticker.ResumoBalancoDFP[0].PatrimonioLiquido
            }} />
          }catch (error){
            console.log(error)
          }
        })}
      </TickerListingContainer>
    </>
  )
}