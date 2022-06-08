import theme from "../components/Theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import CosmosBody from "../components/CosmosBody";
import { ThemeProvider } from "styled-components";

function CosmosPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <CosmosBody />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default CosmosPage;
