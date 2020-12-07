// eslint-disable-next-line no-use-before-define
import React from "react";

import Container from "./styles";

import logoImg from "../../assets/logo.svg";
import heroesImg from "../../assets/heroes.png";

const Logon = () => {
  return (
    <Container className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be the Hero" />
        <form>
          <h1>Faça seu Logon</h1>

          <input placeholder="Sua ID" />
          <button type="submit" />
        </form>
      </section>
      <img src={heroesImg} alt="Heroes" />
    </Container>
  );
};

export default Logon;
