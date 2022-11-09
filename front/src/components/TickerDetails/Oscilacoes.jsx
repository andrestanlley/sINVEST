import { dicionarioOscilacoes } from "./dicionarios"
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

export default function Oscilacoes(props){
    const Oscilacoes = props.data
    return (
        <section id='OSCILACOES'>
                <h1>Oscilações</h1>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={Oscilacoes}>
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="Oscilacao" scale="band" /><YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                    <Legend />
                    <Bar dataKey="Var" name='Variação (%)' barSize={30} fill="var(--verde)" />
                  </ComposedChart>
                </ResponsiveContainer>
                {Oscilacoes.map((osc, index) => {
                  return <div className={index % 2 == 0 ? "linhaImpar" : "linhaPar"} key={index}>
                    <div>
                      <p id='title'>{dicionarioOscilacoes[index]}</p>
                    </div>
                    <div>
                      <p>{osc.Var} %</p>
                    </div>
                  </div>
                })}
              </section>
    )
}