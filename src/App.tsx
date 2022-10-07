import { ThemeProvider } from "styled-components";
import NavBar from "./Components/Template/NavBar";
import { theme } from "./utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  );
}

export default App;
