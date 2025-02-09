import React, { useEffect } from "react";
import { Button, Container } from "./styles";
import { useNavigate } from "react-router-dom";
import { trackPageView } from "../../../trackingService";

const Anniversary = () => {
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView("Home aniversário", window.location.pathname);
  }, []);

  const handleContinue = () => {
    navigate("/parabens");
  };

  const handleStop = () => {
    navigate("/fim");
  };

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

export default Anniversary;
