import { dicionarioIndicadores } from "./dicionarios"

export default function Indicadores(props){

    const indicadores = props.data

    return (
        <section id='INDICADORES'>
                <h1>Indicadores</h1>
                <div>
                {Object.keys(indicadores).map((desc, index) => {
                  return <div key={index}>
                    <div>
                      <p className='indicador-titulo linhaImpar'>{dicionarioIndicadores[index]}</p>
                      <span className='indicador-valor linhaPar'>{indicadores[desc]}</span>
                    </div>
                  </div>
                })}
                </div>
              </section>
    )
}