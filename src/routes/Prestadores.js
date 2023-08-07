import React from "react";
import api from "../axios/config";
import Table from "react-bootstrap/Table";
import TablePrestadores from "../Components/TablePrestadores/TablePrestadores";
import { useState, useEffect } from "react";

const Prestadores = () => {
  const [prestadores, setPrestadores] = useState([]);

  const getPrestadores = async () => {
    try {
      const response = await api.get("/prestador");
      const { data } = response.data;
      setPrestadores(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrestadores();
  }, []);

  return (
    <div className="p-3 table-responsive card shadow mb-5 bg-white rounded">
      <h2 className="font-weight-bold">Lista</h2>
      <Table striped hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {prestadores.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            prestadores.map((prestador) => (
              <TablePrestadores key={prestador.id} prestador={prestador} />
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default Prestadores;
