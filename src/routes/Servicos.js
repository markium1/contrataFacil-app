import React from "react";
import TabelaServicos from "../Components/TableServicos/TableServicos";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  const getServicos = async () => {
    try {
      //const response = axios.get("uri");
      //const data = response.data;
      //setServicos(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-2">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Descricao</th>
            <th>Valor</th>
            <th>Prestador</th>
          </tr>
        </thead>
        <tbody>
          <TabelaServicos
            servico={{
              nome: "Cuidadora",
              descricao: "A melhor do mundo graças a Deus, pai!",
              valor: 100,
              prestador: "Renata",
            }}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default Servicos;
