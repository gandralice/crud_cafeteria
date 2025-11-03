// Usar o componente Link para navega��o. O Link os componentes s�o trocados sem ocorrer refresh da p�gina.
import { Link, Outlet } from "react-router-dom";
import "./Layout.scss";

export default function Layout() {
  return (
    <div>
      <h1>Café Lab</h1>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/produto">Produto </Link>
          </li>
        </ul>
      </nav>
      <div className="grade">
        <div className="lateral">x</div>
        <Outlet />
        <div className="lateral">y</div>
      </div>
    </div>
  );
}
