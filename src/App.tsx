import { ThemeProvider } from "styled-components";
import theme from "./style/theme";
import GlobalStyle from "./style/global";
import Router from "./Router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
      </ThemeProvider>
    </>
  );
}

export default App;
