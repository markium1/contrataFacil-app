import React from "react";

const TablePrestadores = ({ prestador }) => {
  console.log(prestador);
  return (
      <tr>
        <td>{prestador.nome}</td>
        <td>{prestador.telefone}</td>
        <td>{prestador.email}</td>
      </tr>
  );
};

export default TablePrestadores;
