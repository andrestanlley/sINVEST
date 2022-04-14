import { PanelConteiner } from './styles'
import {Link} from 'react-router-dom'

export default function Panel() {
    return (
        <PanelConteiner>
            <div>
                <h1>Quem somos</h1>
                <span>Dispomos dos principais ativos do mercado financeiro para você realizar a melhor escolha de investimentos. Um site completo, preparado de maneira simplificada e direta para quem pretende investir no mercado financeiro. Uma visão macro, e tudo isso num só lugar.</span><br></br>
                <Link to="/indices"><button>Ver índices</button></Link>
            </div>
            <div id='logo'>
                <img src="../assets/imgs/Logo_001.png" alt="" />
            </div>
        </PanelConteiner>
    )
}