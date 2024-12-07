import React, { useState } from "react";
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
  font-size: 2em;
  color: #333;
  margin-bottom: 20px;
`;

const Question = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 2rem 0;
`;

const Button = styled.button<{ primary?: boolean; isEscaping?: boolean }>`
  background-color: ${(props) => (props.primary ? "#3b3b3b" : "#fdfdfd")};
  color: ${(props) => (props.primary ? "#fdfdfd" : "#3b3b3b")};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: ${(props) => (props.isEscaping ? "pointer" : "static")};
  transform: ${(props) =>
    props.isEscaping
      ? `translate(${Math.random() * 50 + 25}%, ${Math.random() * 50 + 25}%)`
      : "none"};
  transition: transform 0.3s ease, background-color 0.3s ease;
  width: 150px;
`;

const Message = styled.p`
  font-size: 1em;
  color: #d32f2f;
  margin-top: 20px;
  font-weight: bold;
`;

const SMSLink = styled.a`
  margin-top: 20px;
  font-size: 1em;
  color: #999999;

  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #6d6d6d;
  }
`;

const Signature = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-top: 30px;
  font-style: italic;
`;

const GifContainer = styled.div`
  margin-top: 20px;

  img {
    width: 300px;
    border-radius: 10px;
  }
`;

const Accept: React.FC = () => {
  const [accepted, setAccepted] = useState<boolean | null>(null);
  const [isEscaping, setIsEscaping] = useState(false);
  const [noClicks, setNoClicks] = useState(0);

  const navigate = useNavigate();

  const noMessages = [
    "Por favor, pense melhor! Você merece esses parabéns. 🎉",
    "Não seja tão teimosa! Aceite os parabéns. 🥰",
    "Sério? Você vai recusar isso? 😢",
    "Esta é sua última chance! Depois disso, não insisto mais. 😬",
    "Ok, desisto!",
  ];

  const handleYes = () => {
    setAccepted(true);
  };

  const handleNo = () => {
    if (noClicks < noMessages.length - 1) {
      setNoClicks((prev) => prev + 1);
      setIsEscaping(true);
      setTimeout(() => setIsEscaping(false), 400);
    }
  };

  const getTitle = (): string => {
    if (accepted) return "Você Aceitou os Parabéns 🎉";
    if (noClicks === noMessages.length - 1)
      return "Você Não Aceitou os Parabéns 😔";
    return "Parabéns? 🎉";
  };

  return (
    <Container>
      <Title>{getTitle()}</Title>
      {!accepted && noClicks < noMessages.length - 1 && (
        <>
          <Question>Você aceita os parabéns?</Question>
          <ButtonContainer>
            <Button isEscaping={isEscaping} onClick={handleNo}>
              Não
            </Button>
            <Button onClick={handleYes} primary>
              Sim
            </Button>
          </ButtonContainer>
          {noClicks > 0 && <Message>{noMessages[noClicks]}</Message>}
        </>
      )}
      {noClicks === noMessages.length - 1 && (
        <>
          <Message>{noMessages[noClicks]}</Message>
          <GifContainer>
            <img src="/titanic-bye.gif" alt="Gif de despedida" />
          </GifContainer>
        </>
      )}
      {accepted && (
        <>
          <p>🎊 Obrigado por aceitar os parabéns!</p>
          <GifContainer>
            <img src="/jackandrose.gif" alt="Gif de celebração" />
          </GifContainer>

          <p>Agora para confirmar, só falta uma coisa:</p>
          <SMSLink
            href="sms:+5511977975522?body=ouri%C3%A7adinha2025"
            target="_blank"
          >
            Clique para enviar um sms com a palavra: "ouriçadinhabr2025"
          </SMSLink>
        </>
      )}

      {accepted && <Signature>Com carinho, Eu 🌹</Signature>}

      {(accepted || noClicks === noMessages.length - 1) && (
        <ButtonContainer>
          <Button onClick={() => navigate("/")}>Início</Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Accept;
