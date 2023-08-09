import React from "react";

const TablePrestadores = ({ prestador }) => {
  return (
    <tr>
      <td>{prestador.nome}</td>
      <td>{prestador.telefone}</td>
      <td>{prestador.email}</td>
      <td>
        <i class="bi-list-ul h4"></i>
      </td>
    </tr>
  );
};

export default TablePrestadores;
