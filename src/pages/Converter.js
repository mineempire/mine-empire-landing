import theme from "../components/Theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ConverterBody from "../components/ConverterBody";
import { ThemeProvider } from "styled-components";

function ConverterPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <ConverterBody />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default ConverterPage;
