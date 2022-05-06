import { TopMenu, Logo } from './styles'
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='bodylimiter'>
            <Helmet>
            <meta charset="utf-8" />
            <meta name="language" content="pt-BR" />
            <meta name="description"
                content="Através dos principais dados corporativos e indicadores econômicos. Tudo isso de forma clara e simplificada para sua melhor experiência." />
            <meta name="robots" content="all" />
            <meta name="author" content="André Stanlley" />
            <meta name="keywords"
                content="investimento, b3, bolsa de valores, ações, visao macro, visaomacro.com, ver cotações, cotações" />
        </Helmet>
            <TopMenu>
            <div className='content'>
                <Logo>
                    <Link to="../" ><img src="../../assets/imgs/Logo_001.png" alt="Logo Visão Macro" /></Link>
                </Logo>
                <div>
                    <ol>
                        <Link to="../"><li>Início</li></Link>
                        <Link to="../ativos"><li>Ativos</li></Link>
                        <Link to="../contato"><li>Contato</li></Link>
                    </ol>
                </div>
            </div>
        </TopMenu>
        </div>
    )
}