import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import TableServicos from "../Components/TableServicos/TableServicos";
const Servicos = () => {
  const [servicos, setServicos] = useState([]);

  const getServicos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/servico");
      const {data} = response.data;
      console.log(data)
      setServicos(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getServicos();
  }, [])
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
           {servicos.length === 0 ? <p>Carregando...</p> : (

              servicos.map((servico) => (
                <TableServicos
                  key={servico.id}
                  servico={servico}
                />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Servicos;
