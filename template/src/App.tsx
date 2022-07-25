import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Routers from "routes";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "styles";

const App = function () {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Routers />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
