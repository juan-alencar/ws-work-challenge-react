import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  outline: none;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  color: ${(props) => props.theme.white};
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.orange200};
  transition: 100ms;
  cursor: pointer;

  &:hover {
    transition: 100ms;
    background-color: ${(props) => props.theme.orange100};
  }
`;
