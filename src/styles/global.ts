import { Styles } from "react-modal";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, textarea, button {
    
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    background-color: ${(props) => props.theme.offWhite}
  }
`;

export const GlobalContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ModalStyle: Styles = {
  overlay: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 99999,
  },
  content: {
    position: "initial",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    justifyContent: "center",
    border: "none",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "20px",
    outline: "none",
    padding: "2rem",
    width: "100%",
    maxWidth: "500px",
    zIndex: 99999,
  },
};
