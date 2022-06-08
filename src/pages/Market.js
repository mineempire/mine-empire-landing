import theme from "../components/Theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MarketBody from "../components/MarketBody";
import { ThemeProvider } from "styled-components";

function MarketPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <MarketBody />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MarketPage;
