import React from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TablePrestadores from "../Components/TablePrestadores/TablePrestadores";
import { useState, useEffect } from "react";

const Prestadores = () => {
  const [prestadores, setPrestadores] = useState([]);

  const getPrestadores = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/prestador");
      const { data } = response.data;
      setPrestadores(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrestadores();
  }, [])

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
          {prestadores.length === 0 ? <p>Carregando...</p> : (

            prestadores.map((prestador) => (
                <TablePrestadores
                  key={prestador.id}
                  prestador={prestador}
                />
            ))
          )}

        </tbody>
      </Table>
    </div>
  );
};

export default Prestadores;
