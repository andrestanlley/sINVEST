import { FooterBar, FooterSubAreas } from "./styles"
import { HiOutlineMail, HiOutlineAnnotation } from "react-icons/hi"
import { AiOutlineInstagram } from "react-icons/ai";
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="bodylimiter">
            <FooterBar>
                <FooterSubAreas>
                    <div>
                        <h1>Fale conosco</h1>
                        <div id="links">
                            
                            <a href="https://instagram.com/visaomacro.com" target="_blank"><HiOutlineMail /> </a>
                            <Link to="../contato"><HiOutlineAnnotation/> </Link>
                            <a href="https://instagram.com/visaomacro.com" target="_blank"><AiOutlineInstagram/></a>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/imgs/logo_branco.png" alt="Logo Visão Macro"></img>
                        <p>Feito com amor na <a href="https://sejaviews.com.br">Views Digital</a> </p>
                    </div>
                </FooterSubAreas>
                <p>	× Não é intenção desse website usar das informações aqui expostas para fins de recomendações ou aconselhamentos financeiros, como também enquanto proposta para aquisição de compra e venda de títulos, ações, fundos imobiliários ou quaisquer  tipo de procedimentos ligados ao mercado financeiro.</p>
            </FooterBar>
        </div>
    )
}