// eslint-disable-next-line no-use-before-define
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

const NewIncident = () => {
  return (
    <Container className="new-incident-container">
      <Content className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva o caso detalhadamente para encontrar um héroi para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>

        <form>
          <input placeholder="Título do caso" />
          <textarea placeholder="Descrição" />
          <input placeholder="Valor em R$" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default NewIncident;
