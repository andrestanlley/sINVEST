import {TopMenu, Logo} from './styles'

export default function Header() {
    return (
        <TopMenu>
            <Logo>
                <img src="../assets/imgs/Logo_001.png" alt="" />
            </Logo>
            <div>
                <ol>
                    <li>início</li>
                    <li>índices</li>
                    <li>contato</li>
                </ol>
            </div>
        </TopMenu>
    )
}