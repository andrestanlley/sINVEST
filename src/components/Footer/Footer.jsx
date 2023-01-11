import { FooterBar, FooterSubAreas } from './styles';
import { FiInstagram, FiMessageCircle, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="bodylimiter">
      <FooterBar>
        <FooterSubAreas>
          <div>
            <h1>Fale conosco</h1>
            <div id="links">
              <a href="mailto:contato@sINVEST.com" target="_blank">
                <FiMail />{' '}
              </a>
              <a href="https://instagram.com/andrestanlley" target="_blank">
                <FiInstagram />
              </a>
            </div>
          </div>
          <div>
            <img
              src="../../assets/imgs/logo_branco.png"
              alt="Logo sINVEST"
            ></img>
            <p>
              Desenvolvido por{' '}
              <a href="https://andrestanlley.com" target="_blank">
                André Stanlley
              </a>
            </p>
          </div>
        </FooterSubAreas>
        <p>
          {' '}
          * Não é intenção desse website usar das informações aqui expostas para
          fins de recomendações ou aconselhamentos financeiros, como também
          enquanto proposta para aquisição de compra e venda de títulos, ações,
          fundos imobiliários ou quaisquer tipos de procedimentos dessa natureza
          ligados ao mercado financeiro.
        </p>
      </FooterBar>
    </div>
  );
}
