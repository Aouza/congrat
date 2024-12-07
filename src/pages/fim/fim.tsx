import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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

const Message = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  margin-top: 20px;

  img {
    width: 300px;
    border-radius: 10px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Button = styled.button`
  margin-top: 30px;
  background-color: #3b3b3b;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #2a2a2a;
  }
`;

const End: React.FC = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/");
  };

  return (
    <Container>
      <Title>😔 Tudo bem...</Title>
      <Message>Às vezes, desistir é a melhor escolha.</Message>

      <ImageContainer>
        <img src="/bye.gif" alt="Despedida" />
      </ImageContainer>

      <Button onClick={handleReturn}>Início</Button>
    </Container>
  );
};

export default End;
