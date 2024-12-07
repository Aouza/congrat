import React from "react";
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

const Description = styled.p`
  font-size: 1.2em;
  color: #555;
  margin-bottom: 40px;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const OptionCard = styled.div`
  background-color: #ffe4b5;
  border: 2px solid #ffcc00;
  border-radius: 10px;
  padding: 20px;
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
`;

const OptionTitle = styled.h2`
  font-size: 1.5em;
  color: #333;
  margin-bottom: 10px;
`;

const OptionDescription = styled.p`
  font-size: 1em;
  color: #666;
  margin-bottom: 15px;
`;

const SMSLink = styled.a`
  font-size: 1.1em;
  color: #007bff;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;

const Gift: React.FC = () => {
  return (
    <Container>
      <Title>Escolha seu Presente 🎁</Title>
      <Description>
        Tenho duas opções incríveis pra você escolher. Ou, se preferir, pode
        ficar com as duas! O que acha?
      </Description>
      <OptionsContainer>
        {/* Opção Paranapiacaba */}
        <OptionCard>
          <OptionTitle>Rolê em Paranapiacaba</OptionTitle>
          <OptionDescription>
            Um passeio cheio de natureza, história e aquele clima único que só
            Paranapiacaba tem!
          </OptionDescription>
          <SMSLink
            href="sms:+5511977975522?body=ouri%C3%A7adinhabr2025"
            target="_blank"
          >
            Escolher: Enviar SMS
          </SMSLink>
        </OptionCard>

        {/* Opção Show */}
        <OptionCard>
          <OptionTitle>Ir ao Show Comigo</OptionTitle>
          <OptionDescription>
            Um show incrível, com música boa e a companhia mais legal que você
            pode ter. 😜
          </OptionDescription>
          <SMSLink
            href="sms:+5511977975522?body=torresmotododia"
            target="_blank"
          >
            Escolher: Enviar SMS
          </SMSLink>
        </OptionCard>

        {/* Ambas as Opções */}
        <OptionCard>
          <OptionTitle>Ambas as Opções</OptionTitle>
          <OptionDescription>
            Por que escolher? Vamos curtir Paranapiacaba e também arrasar no
            show juntos!
          </OptionDescription>
          <SMSLink
            href="sms:+5511977975522?body=rj%C3%A9opiorestadodobr"
            target="_blank"
          >
            Escolher: Enviar SMS
          </SMSLink>
        </OptionCard>
      </OptionsContainer>
    </Container>
  );
};

export default Gift;
