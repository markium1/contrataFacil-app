import React from "react";
import Table from "react-bootstrap/Table";
import TablePrestadores from "../Components/TablePrestadores/TablePrestadores";
import { useState, useEffect } from "react";

const Prestadores = () => {
  const [prestadores, setPrestadores] = useState([]);

  const getPrestadores = async () => {
    try {
      //const response = axios.get("uri");
      //const data = response.data;
      //setPrestadores(data);
    } catch (error) {
      console.log(error);
    }
  };

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
          <TablePrestadores
            prestador={{
              nome: "Renata",
              telefone: "82996094565",
              email: "renata@gmail.com",
            }}
          />
        </tbody>
      </Table>
    </div>
  );
};

export default Prestadores;
