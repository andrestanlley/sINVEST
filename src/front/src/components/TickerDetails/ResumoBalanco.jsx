import renderBalanco from "../../functions/renderBalanco"
import { dicinarioBalanco } from "./dicionarios"

export default function ResumoBalanco(props){
    const Balanco = props.Balanco
    return (
        <section id='BALANCO'>
                <h1 className='tabela'>Resumo Balanço <span> {new Date(Balanco.DataUltBalanco).toLocaleDateString()}</span></h1>
                {Object.keys(Balanco).slice(2).map((desc, index) => {
                  return <div className={index % 2 == 0 ? "linhaImpar" : "linhaPar"} key={index}>
                    <div>
                      <p id='title'>{dicinarioBalanco[index]}</p>
                    </div>
                    <div>
                      <p>{renderBalanco(Balanco, desc, index)}</p>
                    </div>
                  </div>
                })}
              </section>
    )
}