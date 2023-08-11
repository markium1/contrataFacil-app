import React from "react";
import Table from "react-bootstrap/Table";
const TableServicos = ({ servicos }) => {
  return (
    <>
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
              <tr>
                <td>{servico.nome}</td>
                <td>{servico.descricao}</td>
                <td>R$ {servico.valor}</td>
                <td>{servico.prestador.nome}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </>
  );
};

export default TableServicos;
