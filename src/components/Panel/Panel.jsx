import { PanelConteiner } from './styles';
import { Link } from 'react-router-dom';

export default function Panel() {
  return (
    <div className="bodylimiter">
      <PanelConteiner>
        <div>
          <h1>Quem somos</h1>
          <span>
            A sINVEST é um projeto sem fins lucrativos que visa condensar dados
            de empresas nacionais/internacionais e facilitar o entendimento do
            usuario no momento de analisar uma ação. Todos os dados expostos
            aqui são da disponibilizados pela Brapi (https://brapi.dev).
          </span>
          <br></br>
          <Link to="/ativos">
            <button>Ver empresas listadas</button>
          </Link>
        </div>
        <div id="logo">
          <img src="../../assets/imgs/Logo_001.png" alt="Logo sINVEST" />
        </div>
      </PanelConteiner>
    </div>
  );
}
