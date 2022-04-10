import {TopMenu, Logo} from './styles'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <TopMenu>
            <Logo>
                <img src="../assets/imgs/Logo_001.png" alt="" />
            </Logo>
            <div>
                <ol>
                    <Link to="../" ><li>início</li></Link>
                    <li>índices</li>
                    <li>contato</li>
                </ol>
            </div>
        </TopMenu>
    )
}