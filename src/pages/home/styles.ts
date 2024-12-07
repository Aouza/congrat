import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  height: 100vh;
`;

export const Button = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? "#3b3b3b" : "#fdfdfd")};
  color: ${(props) => (props.primary ? "#fdfdfd" : "#3b3b3b")};
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 1em;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.3s;
`;
