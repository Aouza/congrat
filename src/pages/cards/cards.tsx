import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ConfettiExplosion from "react-confetti-explosion";

interface CardProps {
  isFlipped: boolean;
}

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

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  perspective: 1000px;
  position: relative;
`;

const Inner = styled.div<CardProps>`
  width: 150px;
  height: 200px;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${(props) =>
    props.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"};
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: #3b3b3b;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  color: 3b3b3b;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  transform: rotateY(180deg);
  border-radius: 10px;
  padding: 0.5rem;
`;

const ButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 2rem 0;
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

const Cards: React.FC = () => {
  const phrases: string[] = [
    "Agora já está com idade para começar a lavar os pés.",
    "Quem diria que até torresmo agora vai ter um gosto diferente por sua causa?",
    `Certeza que o próximo vídeo do Mayke será:\n\n ‘Provei comida ruim e meus fãs sumiram.’`,
    "Te admiro bastante. Não vou te esquecer, fi da mãe.",
    "Quando você tá longe, parece que eu começo a viver em um mundo totalmente estranho.",
    "Com você até o RJ fica menos ruim.",
  ];

  const navigate = useNavigate();
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [explodingCard, setExplodingCard] = useState<number | null>(null);

  const handleContinue = () => {
    navigate("/audio");
  };

  const stop = () => {
    navigate("/fim");
  };

  const handleCardClick = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards((prev) => [...prev, index]);

      setExplodingCard(index);

      setTimeout(() => setExplodingCard(null), 1000);
    }
  };

  const allCardsFlipped = flippedCards.length === phrases.length;

  return (
    <Container>
      <Title>Escolha um Cartão</Title>
      <p>Abra todos os cartões para conseguir avançar</p>
      <CardsContainer>
        {phrases.map((phrase, index) => (
          <Card key={index} onClick={() => handleCardClick(index)}>
            <Inner isFlipped={flippedCards.includes(index)}>
              <Front>🎉 Clique Aqui</Front>
              <Back>{phrase}</Back>
            </Inner>

            {explodingCard === index && (
              <ConfettiExplosion
                force={1}
                duration={8000}
                particleCount={100}
                colors={["#ffcc00", "#ff66cc", "#66ccff", "#33cc33"]}
              />
            )}
          </Card>
        ))}
      </CardsContainer>

      {allCardsFlipped && (
        <ButtonContainer>
          <Button disabled={!allCardsFlipped} onClick={stop}>
            Parar
          </Button>
          <Button disabled={!allCardsFlipped} primary onClick={handleContinue}>
            Avançar
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Cards;
