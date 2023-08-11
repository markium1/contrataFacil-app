import React, { useState } from "react";

import { Modal, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import api from "../../axios/config";

const TablePrestadores = ({ prestadores }) => {
  const [modalShow, setModalShow] = useState(false);
  const [servicosById, setServicosById] = useState([]);

  const getServicosById = async (id) => {
    try {
      const response = await api.get(`/prestador/${id}`);
      const { data } = response.data;
      setServicosById(data.servicos);
    } catch (error) {
      console.log(error);
    }
  };
  const handleOpenModal = (id) => {
    getServicosById(id);
    setModalShow(true);
  };

  const handleCloseModal = () => {
    setModalShow(false);
  };
  return (
    <>
      <Modal show={modalShow} onHide={handleCloseModal} className="text-dark">
        {console.log(servicosById)}
        <Modal.Header closeButton>
          <Modal.Title>Serviços</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {servicosById.length === 0 ? (
            <p>Não tem serviços cadastrados</p>
          ) : (
            <ul>
              {servicosById.map((servico) => (
                <li>{servico.nome}</li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
      <h2 className="font-weight-bold">Lista</h2>
      <Table striped hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {prestadores.map((prestador) => (
            <tr>
              <td>{prestador.nome}</td>
              <td>{prestador.telefone}</td>
              <td>{prestador.email}</td>
              <td>
                <button
                  className="btn btn-light"
                  onClick={() => handleOpenModal(prestador.id)}>
                  <i class="bi-list-ul h4 text-dark"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default TablePrestadores;
