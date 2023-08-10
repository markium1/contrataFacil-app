import React from "react";
import "./Formulario.css";
import { Button, Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import api from "../../axios/config";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ConfirmacaoFormulario from "../Modal/ConfirmacaoFormulario";
import InputMask from "react-input-mask";
const Formulario = ({ formConfig }) => {
  const [prestadores, setPrestadores] = useState([]);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
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
    //console.log(formConfig);
    if (formConfig.nome === "prestador") {
      try {
        const json = { ...e, foto: photo };
        console.log("eita é", e);
        await api.post(`/${formConfig.nome}`, json, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        reset();
        exibirModal();
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await api.post(`/${formConfig.nome}`, e);
        reset();
        exibirModal();
      } catch (error) {
        console.log(error);
      }
    }
  };
  const getPrestadores = async () => {
    try {
      const response = await api.get("/prestador");
      const { data } = response.data;
      console.log(data);
      setPrestadores(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrestadores();
  }, []);

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
      <h2>
        Inserir Novo
        {" " + formConfig.nome[0].toUpperCase() + formConfig.nome.substring(1)}
      </h2>

      {formConfig.nome === "prestador" ? (
        <form onSubmit={handleSubmit(create)}>
          <div className="formulario-control">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              name="nome"
              placeholder="Digite Seu nome"
              id="nome"
              {...register("nome", { required: true })}
            />
            <label htmlFor="telefone">Telefone:</label>
            <InputMask
              mask="(99) 99999-9999"
              type="tel"
              name="telefone"
              placeholder="Digite Seu telefone"
              id="telefone"
              {...register("telefone", { required: true })}
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Digite Seu email"
              id="email"
              {...register("email", { required: true })}
            />
            <input
              type="file"
              name="foto"
              onChange={handlePhotoChange}
              className="form-control"
            />
            <Button variant="secondary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit(create)}>
          <div className="formulario-control">
            <label htmlFor="titulo">Titulo:</label>
            <input
              type="text"
              name="nome"
              {...register("nome", { required: true })}
              placeholder="Digite o Título"
              id="titulo"
            />
            <label htmlFor="descricao">Descrição:</label>
            <textarea
              name="descricao"
              placeholder="Digite a Descrição"
              id="descricao"
              {...register("descricao", { required: true })}
            />
            <label htmlFor="valor">Valor:</label>
            <input
              type="number"
              name="valor"
              {...register("valor", { required: true })}
              placeholder="Digite o Valor"
              id="valor"
            />
            <label for="prestador">Escolha o prestador:</label>

            <select
              name="prestadores"
              id="prestadores"
              {...register("prestador_id", { required: true })}
              required>
              <option selected value={""}>
                Escolha...
              </option>
              {prestadores.lenght === 0 ? (
                <option>Carregando...</option>
              ) : (
                prestadores.map((item) => (
                  <option name={item.id} value={item.id}>
                    {item.nome}
                  </option>
                ))
              )}
            </select>
            {errors.exampleRequired && <span>This field is required</span>}
            <Button variant="secondary" type="submit">
              Cadastrar
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Formulario;
