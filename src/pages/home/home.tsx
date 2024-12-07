import React from "react";
import { Button, Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/parabens");
  };

  const handleStop = () => {
    navigate("/fim");
  };

  const handleDesist = () => alert("Você desistiu. 😢");

  return (
    <Container>
      <h1>Oi, Beatriz!</h1>
      <p>Essa é uma página feita especialmente para você!</p>

      <div>
        <Button onClick={handleStop}>Desistir</Button>
        <Button onClick={handleContinue} primary>
          Continuar
        </Button>
      </div>
    </Container>
  );
};

export default Home;
