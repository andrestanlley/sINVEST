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
import { dicinarioBalanco, dicionarioCotacoes } from './dicionarios';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import renderOscilacao from '../../functions/renderOscilação';

export default function TickerDetail(props) {
  const [ticker, SetTicker] = useState()

  useEffect(() => {
    const getTicker = async () => {
      const res = await axios.get(`../../api/ticker/${props.acao}`, { headers: { "reactAuth": (Math.random() * 1000) } }); 
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
              <section id='INFO'>
                <p id='TICKER'>{ticker.DescricaoDoAtivo[0].Codigo}</p>
                <p id='NOMEEMPRESA'>{ticker.InfoEmpresaDadosGerais[0] ? ticker.InfoEmpresaDadosGerais[0].NomeEmpresarial : ticker.DescricaoDoAtivo[0].NomeMercado}</p>
                <p id='SETOR'>{ticker.ClassificacaoSetorial[0].Setor} • {ticker.InfoEmpresaDadosGerais[0]?.EspeciControle}</p>
                <p id='DESCRICAO'>{ticker.InfoEmpresaDadosGerais[0]?.DescricaoAtividade}</p>
                {ticker.InfoEmpresaDadosGerais[0] && (
                  <div id='CVM-CNPJ'>
                    <span>Cod CVM <span>{ticker.InfoEmpresaDadosGerais[0]?.CodCvm}</span></span>
                    <span>CNPJ <span>{ticker.InfoEmpresaDadosGerais[0]?.CNPJ}</span></span>
                  </div>
                )}
                {ticker.InfoEmpresaDadosGerais[0]?.Site && (
                  <a href={ticker.InfoEmpresaDadosGerais[0]?.Site.indexOf("//") > 0 ? ticker.InfoEmpresaDadosGerais[0]?.Site : `http://${ticker.InfoEmpresaDadosGerais[0]?.Site}`} id="SITE" target="_blank"><MdLabel className='icon' />{ticker.InfoEmpresaDadosGerais[0]?.Site}    </a>
                )}
              </section>
            )}
            {ticker.ValorDeMercado[0] && (
              <section id='VALORDEMERCADO'>
                <div id='Titulo'>
                  <img src="../../assets/imgs/icon-money.png" alt="Ícone valor" />
                  <h1>Market Cap<span>Valor de mercado</span></h1>
                </div>
                <div id='Valor'>
                  <span>{(ticker.ValorDeMercado[0].ValorDeMercado / 1000000000).toFixed(2)}B</span>
                  <p>{ticker.ValorDeMercado[0].ValorDeMercado.toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
                </div>
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
              <section id='COTACOES'>
                <h1 className='tabela'>Cotações <span> {new Date(ticker.Cotacoes[0].Data).toLocaleDateString()}</span></h1>
                {Object.keys(ticker.Cotacoes[0]).slice(1).map((desc, index) => {
                  return <div className={index % 2 == 0 ? "linhaImpar" : "linhaPar"} key={index}>
                    <div>
                      <p id='title'>{dicionarioCotacoes[index]}</p>
                    </div>
                    <div>
                      <p>{renderOscilacao(ticker, desc, index)}</p>
                    </div>
                  </div>
                })}
              </section>
            )}
            {ticker.ResumoBalancoDFP[0] && (
              <section id='BALANCO'>
                <h1 className='tabela'>Resumo Balanço <span> {new Date(ticker.ResumoBalancoDFP[0].DataUltBalanco).toLocaleDateString()}</span></h1>
                {Object.keys(ticker.ResumoBalancoDFP[0]).slice(1).map((desc, index) => {
                  return <div className={index % 2 == 0 ? "linhaImpar" : "linhaPar"} key={index}>
                    <div>
                      <p id='title'>{dicinarioBalanco[index]}</p>
                    </div>
                    <div>
                      <p>{ticker.ResumoBalancoDFP[0][desc].toLocaleString("pt-BR", { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
                    </div>
                  </div>
                })}
              </section>
            )}
          </div>
        }
      </TickerDetails>
    </div>
  )
}