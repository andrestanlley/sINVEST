import { TopMenu, Logo } from './styles'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <TopMenu>
            <div className='content'>
                <Logo>
                    <Link to="../" ><img src="../assets/imgs/Logo_001.png" alt="Logo Visão Macro" /></Link>
                </Logo>
                <div>
                    <ol>
                        <Link to="../" ><li>início</li></Link>
                        <Link to="../indices" ><li>índices</li></Link>
                        <Link to="../" ><li>contato</li></Link>
                    </ol>
                </div>
            </div>
        </TopMenu>
    )
}