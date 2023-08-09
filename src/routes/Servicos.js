import React from "react";
import api from "../axios/config";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableServicos from "../Components/TableServicos/TableServicos";
import { Pagination, Form, Button } from "react-bootstrap";
const Servicos = () => {
  const [servicos, setServicos] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [qtPaginas, setQtPaginas] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");
  const getServicos = async (paginaAtual) => {
    try {
      const response = await api.get(`/servico?page${paginaAtual}`);
      const { data } = response.data;
      setServicos(data);
      setQtPaginas(response.data.last_page);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await api.get(`/servico?term=${searchTerm}`);
      const { data } = response.data;
      console.log(data);
      setServicos(data);
    } catch (error) {
      console.error("Erro ao buscar resultados:", error);
    }
  };
  const mudarPagina = (pagina) => {
    setPaginaAtual(pagina);
  };
  useEffect(() => {
    getServicos(paginaAtual);
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
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Valor</th>
            <th>Prestador</th>
          </tr>
        </thead>
        <tbody>
          {servicos.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            servicos.map((servico) => (
              <TableServicos key={servico.id} servico={servico} />
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

export default Servicos;
