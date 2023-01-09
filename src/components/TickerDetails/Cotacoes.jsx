import renderOscilacao from "../../functions/renderOscilação"
import { dicionarioCotacoes } from "./dicionarios"

export default function Cotacoes(props){
    const Cotacoes = props.Cotacoes
    return (
        <section id='COTACOES'>
                <h1 className='tabela'>Cotações <span> {new Date(Cotacoes.Data).toLocaleDateString()}</span></h1>
                {Object.keys(Cotacoes).slice(1).map((desc, index) => {
                  if(index == 7)
                    return
                  return <div className={index % 2 == 0 && index != 8 ? "linhaImpar" : "linhaPar"} key={index}>
                    <div>
                      <p id='title'>{dicionarioCotacoes[index]}</p>
                    </div>
                    <div>
                      <p>{renderOscilacao(Cotacoes, desc, index)}</p>
                    </div>
                  </div>
                })}
              </section>
    )
}