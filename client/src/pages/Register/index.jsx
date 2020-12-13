// eslint-disable-next-line no-use-before-define
import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content } from "./styles";

import logoImg from "../../assets/logo.svg";

const Register = () => {
  return (
    <Container className="register-container">
      <Content className="content">
        <section>
          <img src={logoImg} alt="Be the Hero" />
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrares
            os casod da sua ONG.
          </p>
          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
        </section>

        <form>
          <input placeholder="Nome da ONG" />
          <input type="email" placeholder="E-mail" />
          <input placeholder="Whattsapp" />

          <div className="input-group">
            <input placeholder="Cidade" />
            <input placeholder="UF" style={{ width: 80 }} />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </Content>
    </Container>
  );
};

export default Register;
