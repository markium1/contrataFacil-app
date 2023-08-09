import React from "react";
import { Button, Modal } from "react-bootstrap";
const ExibirServicos = () => {
  return (
    <Modal centered show={false}>
      <Modal.Header closseButton className="bg-success text-dark">
        <Modal.Title>Confirmação de Cadastro</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-success text-dark">
        <ul>
          <li>Teste</li>
        </ul>
        <Button variant="dark">Fechar</Button>
      </Modal.Body>
    </Modal>
  );
};

export default ExibirServicos;
