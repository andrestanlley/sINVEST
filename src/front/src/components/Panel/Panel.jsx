import { PanelConteiner } from './styles'
import { Link } from 'react-router-dom'

export default function Panel() {
    return (
        <div className='bodylimiter'>
            <PanelConteiner>
                <div>
                    <h1>Quem somos</h1>
                    <span>Dispomos de todas as empresas listadas na Bolsa de Valores Brasileira para você realizar a melhor escolha de investimentos, através dos principais dados corporativos e indicadores econômicos, colhidos do próprio banco de dados da B3 e Comissão de Valores Mobiliários (CVM). Tudo isso de forma clara e simplificada para sua melhor experiência, possibilitando assim uma análise fundamentalista precisa e eficaz.  </span><br></br>
                    <Link to="/indices"><button>Ver empresas listadas</button></Link>
                </div>
                <div id='logo'>
                    <img src="../../assets/imgs/Logo_001.png" alt="" />
                </div>
            </PanelConteiner>
        </div>
    )
}