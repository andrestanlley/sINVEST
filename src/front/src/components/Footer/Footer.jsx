import { FooterBar, FooterSubAreas } from "./styles"
import { FiInstagram, FiMessageCircle, FiMail } from "react-icons/fi";
import AdSense from 'react-adsense';
import {Link} from 'react-router-dom'
import { MdBlock } from "react-icons/md";

export default function Footer() {
    return (
        <div className="bodylimiter">
            <FooterBar>
            <AdSense.Google
            client="ca-pub-2228435789089108"
            style={{display: "block", width: 1080, height: 300 }}
            />
                <FooterSubAreas>
                    <div>
                        <h1>Fale conosco</h1>
                        <div id="links">
                            
                            <a href="mailto:contato@visaomacro.com" target="_blank"><FiMail /> </a>
                            <Link to="../contato"><FiMessageCircle/> </Link>
                            <a href="https://instagram.com/visaomacroinvestimentos" target="_blank"><FiInstagram/></a>
                        </div>
                    </div>
                    <div>
                        <img src="../../assets/imgs/logo_branco.png" alt="Logo Visão Macro"></img>
                        <p>Desenvolvido por <a href="https://sejaviews.com.br">Views Digital</a> </p>
                    </div>
                </FooterSubAreas>
                <p>	* Não é intenção desse website usar das informações aqui expostas para fins de recomendações ou aconselhamentos financeiros, como também enquanto proposta para aquisição de compra e venda de títulos, ações, fundos imobiliários ou quaisquer tipos de procedimentos dessa natureza ligados ao mercado financeiro.</p>
            </FooterBar>
        </div>
    )
}