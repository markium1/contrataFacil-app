import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <nav className="navbar">
          <h2>
            <Link to={`/`}>ContrataFacil</Link>
          </h2>
          <ul>
            <li>
              <Link to={`/servicos`}>Servicos</Link>
            </li>
            <li>
              <Link to={`/prestadores`}>Prestadores de Serviços</Link>
            </li>
          </ul>

          <ul className="new-btn">
            <li>
              <Link to={`/cadastro-prestador`}>
                <button>Cadastrar Prestador</button>
              </Link>
            </li>
            <li>
              <Link to={`/cadastro-servico`}>
                <button>Cadastrar Serviço</button>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
