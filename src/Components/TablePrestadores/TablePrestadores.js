import React from "react";
import Table from "react-bootstrap/Table";
const TableServicos = () => {
  return (
    <div className="p-2">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Renata da Silva</td>
            <td>9999999999</td>
            <td>renataingrata@gmail.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableServicos;
