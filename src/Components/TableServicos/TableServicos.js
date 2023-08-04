import React from "react";
import Table from "react-bootstrap/Table";
const TableServicos = ({ servico }) => {
  return (
    <tr>
      <td>{servico.nome}</td>
      <td>{servico.descricao}</td>
      <td>R$ {servico.valor}</td>
      <td>{servico.prestador}</td>
    </tr>
  );
};

export default TableServicos;
