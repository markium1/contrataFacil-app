import React from "react";
import "./Formulario.css";
import { useState } from "react";
import api from "../../axios/config";

import { useForm } from "react-hook-form";
import ConfirmacaoFormulario from "../Modal/ConfirmacaoFormulario";

const FormularioCSV = ({ formConfig }) => {
  const [show, setShow] = useState(false);

  const exibirModal = () => setShow(true);
  const fecharModal = () => {
    setShow(false);
  };

  const { register, handleSubmit, reset } = useForm();

  const create = async (e) => {
    console.log(e.csv_file[0]);
    try {
      const json = { csv_file: e.csv_file[0] };
      console.log(json);
      await api.post(`/servico-csv`, json, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      reset();
      exibirModal();
    } catch (error) {
      console.log(error);
    }
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
            className="form-control"
            {...register("csv_file", { required: true })}
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
