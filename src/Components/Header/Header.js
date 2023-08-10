import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Dropdown } from "react-bootstrap";
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

          <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Cadastros
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={`/cadastro-prestador`}>
                  <button className="new-btn">Cadastrar Prestador</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/cadastro-servico`}>
                  <button className="new-btn">Cadastrar Serviço</button>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to={`/cadastro-servico-csv`}>
                  <button className="new-btn">Cadastrar Serviço CSV</button>
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </nav>
      </header>
    </>
  );
};

export default Header;
