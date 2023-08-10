import React from "react";
import "./Formulario.css";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../axios/config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ConfirmacaoFormulario from "../Modal/ConfirmacaoFormulario";
import InputMask from "react-input-mask";
const FormularioCSV = ({ formConfig }) => {
  const [show, setShow] = useState(false);
  const [csv, setCsv] = useState(null);

  const handleCSVChange = (event) => {
    setCsv(event.target.files[0]);
  };
  const exibirModal = () => setShow(true);
  const fecharModal = () => {
    setShow(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const create = async (e) => {
    const json = { ...e, csv_file: csv };
    console.log(json);
    await api.post(`/servico-csv`, json, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div className="formulario">
      {show ? (
        <ConfirmacaoFormulario
          show={show}
          mensagem={"Cadastro com Sucesso"}
          esconder={fecharModal}
        />
      ) : (
        <></>
      )}
      <h2>Inserir Novo Serviço com CSV</h2>

      <form onSubmit={handleSubmit(create)}>
        <div className="formulario-control">
          <input
            type="file"
            name="csv_file"
            onChange={handleCSVChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-secondary">
            Enviar CSV
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioCSV;
