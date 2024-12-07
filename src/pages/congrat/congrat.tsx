import React from "react";
import styled from "styled-components";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  text-align: center;
  padding: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 600px;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  color: #000000;
  font-size: 2.5em;
`;

const Message = styled.p`
  text-align: left;
  padding: 0 2rem;
  font-size: 1.2em;
  color: #333;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`;

const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#3b3b3b" : "#fdfdfd")};
  color: ${(props) => (props.primary ? "#fdfdfd" : "#3b3b3b")};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? "#3b3b3b" : "#fdfdfd")};
  }
`;

const Congratulations = () => {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/cartoes");
  };

  const stop = () => {
    navigate("/fim");
  };

  const { width, height } = useWindowSize();

  return (
    <Container>
      <Confetti width={width} height={height} />
      <Title>Parabéns! 🎉</Title>
      <Message>
        Hoje é o seu aniversário, e eu fiquei pensando muito se deveria te
        mandar uma mensagem ou não. Sei que a gente não está no nosso melhor
        momento, que as coisas não terminaram bem e que talvez você nem
        esperasse algo vindo de mim hoje. Mas, mesmo assim, eu senti que
        precisava te escrever.
        <br />
        <br />
        Essa mensagem não é pra trazer nenhum sentimento ruim ou mexer com o seu
        dia de forma negativa. É só uma forma de dizer que, apesar de tudo, eu
        não poderia deixar essa data passar sem te parabenizar e desejar, do
        fundo do coração, tudo de melhor pra você.
        <br />
        <br />
        Se tem uma coisa que eu realmente espero, é que você esteja cercada de
        pessoas que te façam bem.
        <br />
        <br />
        Eu sei que a gente se afastou e que talvez as coisas tenham ficado
        complicadas demais pra consertar. Mas o carinho e a admiração que sinto
        por você ainda estão aqui. Eu realmente torço pra que esse novo ano na
        sua vida te traga conquistas, muuuuuita paz e muitos momentos bons. Você
        merece tudo.
        <br />
        <br />
        Feliz aniversário!
        <br />
        <br />
        Essa mensagem é só uma forma de eu fazer parte do seu dia, mesmo que de
        longe.
        <br />
        Espero que seu dia seja ótimo, aproveite.
      </Message>

      <ButtonContainer>
        <Button onClick={stop}>Parar</Button>
        <Button primary onClick={handleContinue}>
          Continuar
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default Congratulations;
