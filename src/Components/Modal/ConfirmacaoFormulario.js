import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./ConfirmacaoFormulario.css";
const ConfirmacaoFormulario = ({ show, mensagem, esconder }) => {
  return (
    <Modal centered show={show} onHide={esconder}>
      <Modal.Header closseButton className="bg-success text-dark">
        <Modal.Title>Confirmação de Cadastro</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-success text-dark">
        <p className="text-dark">{mensagem}</p>
        <Button variant="dark" onClick={esconder}>
          Fechar
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default ConfirmacaoFormulario;
