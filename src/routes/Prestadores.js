import React from "react";
import api from "../axios/config";
import Table from "react-bootstrap/Table";
import TablePrestadores from "../Components/TablePrestadores/TablePrestadores";
import { useState, useEffect } from "react";
import { Pagination, Form, Button } from "react-bootstrap";
import "./Prestador.css";
const Prestadores = () => {
  const [prestadores, setPrestadores] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [qtPaginas, setQtPaginas] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const [show, setShow] = useState(false);

  const exibirModal = () => setShow(true);
  const fecharModal = () => {
    setShow(false);
  };
  const getPrestadores = async (pagina) => {
    try {
      const response = await api.get(`/prestador?page=${pagina}`);
      const { data } = response.data;
      setPrestadores(data);
      setQtPaginas(response.data.last_page);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSearch = async () => {
    try {
      const response = await api.get(`prestador?term=${searchTerm}`);
      const { data } = response.data;
      console.log(response.data);
      setPrestadores(data);
    } catch (error) {
      console.error("Erro ao buscar resultados:", error);
    }
  };
  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina);
  };
  useEffect(() => {
    getPrestadores(paginaAtual);
  }, [paginaAtual]);

  return (
    <div className="p-3 table-responsive card shadow mb-5 bg-white rounded">
      <Form>
        <input
          type="text"
          className="form-control form-control-sm"
          placeholder="Pesquisar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          variant="secondary"
          className="btn-sm m-2"
          onClick={handleSearch}>
          Pesquisar
        </Button>
      </Form>
      <h2 className="font-weight-bold">Lista</h2>
      <Table striped hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {prestadores.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            prestadores.map((prestador) => (
              <TablePrestadores key={prestador.id} prestador={prestador} />
            ))
          )}
        </tbody>
      </Table>
      <Pagination>
        {Array.from({ length: qtPaginas }, (_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === paginaAtual}
            onClick={() => mudarPagina(index + 1)}>
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Prestadores;
