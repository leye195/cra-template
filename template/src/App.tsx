import Routers from "routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles";

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routers />
    </ThemeProvider>
  );
};

export default App;
