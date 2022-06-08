import theme from "../components/Theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RefineryBody from "../components/RefineryBody";
import { ThemeProvider } from "styled-components";

function RefineryPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <RefineryBody />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default RefineryPage;
