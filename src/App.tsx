import { ThemeProvider } from "styled-components";
import { GlobalContainer, GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes/default";
import { AdminPage } from "./Pages/AdminPage";

import { Sidebar } from "./components/Sidebar";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalContainer>
          <Sidebar />
          <AdminPage />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
