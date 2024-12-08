import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #f7f7f7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.5em;
  color: #333;
  margin-bottom: 20px;
`;

const AudioPlayer = styled.audio`
  margin-top: 20px;
  width: 80%;
  max-width: 500px;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#3b3b3b" : "#fdfdfd")};

  color: ${(props) => (props.primary ? "#fdfdfd" : "#3b3b3b")};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: ${(props: { disabled?: boolean }) =>
    props.disabled ? "not-allowed" : "pointer"};
  transition: background-color 0.3s;
`;

const Audio: React.FC = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/eagora");
  };

  const stop = () => {
    navigate("/fim");
  };

  return (
    <Container>
      <Title>Uma mensagem especial para você</Title>
      <p>Aperte o play para ouvir a mensagem que preparei com muito carinho!</p>
      <AudioPlayer controls>
        <source src="/audioo.mp4" type="audio/mpeg" />
        Seu navegador não suporta a reprodução de áudio.
      </AudioPlayer>

      <ButtonContainer>
        <Button onClick={stop}>Parar</Button>
        <Button onClick={handleContinue} primary>
          Avançar
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Audio;
