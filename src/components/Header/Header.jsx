import { TopMenu, Logo } from './styles';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bodylimiter">
      <TopMenu>
        <div className="content">
          <Logo>
            <Link to="../">
              <img src="../../assets/imgs/Logo_001.png" alt="Logo sINVEST" />
            </Link>
          </Logo>
          <div>
            <ol>
              <Link to="../">
                <li>Início</li>
              </Link>
              <Link to="../ativos">
                <li>Ativos</li>
              </Link>
            </ol>
          </div>
        </div>
      </TopMenu>
    </div>
  );
}
