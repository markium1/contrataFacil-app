import React from "react";
import api from "../axios/config";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableServicos from "../Components/TableServicos/TableServicos";
const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  const getServicos = async () => {
    try {
      const response = await api.get("/servico");
      const { data } = response.data;
      console.log(data);
      setServicos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServicos();
  }, []);
  return (
    <div className="p-3 table-responsive card shadow mb-5 bg-white rounded">
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
    </div>
  );
};

export default Servicos;
