import React from "react";
import Table from "react-bootstrap/Table";
const TableServicos = () => {
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
          <tr>
            <td>Cuidadora de Crianças</td>
            <td>A melhor cuidadora que a cidade já viu</td>
            <td>R$ 100</td>
            <td>Renata</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableServicos;
