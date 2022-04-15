import { Ticker } from './Ticker';
import './tickerListing.css';

export default function TickerListing(props) {
  return (
    <>
      <div className='container-tickers'>
        {props.data.map((ticker, index) => {
          try{
            return <Ticker key={index} info={{
              name: ticker.InfoEmpresaDadosGerais[0] ? ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial : ticker.DescricaoDoAtivo[0].NomeMercado,
              ticker: ticker.DescricaoDoAtivo[0] ? ticker.DescricaoDoAtivo[0].Codigo : "Indisponivel",
              variacao: ticker.Oscilacoes[0] ? ticker.Oscilacoes[0].Var : "",
              setor: ticker.ClassificacaoSetorial[0] ? ticker.ClassificacaoSetorial[0].Setor : "Indisponivel"
            }} />
          }catch{}
        })}
      </div>
    </>
  )
}