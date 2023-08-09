import React from "react";

const TableServicos = ({ servico }) => {
  return (
    <tr>
      <td>{servico.nome}</td>
      <td>{servico.descricao}</td>
      <td>R$ {servico.valor}</td>
      <td>{servico.prestador.nome}</td>
    </tr>
  );
};

export default TableServicos;
