import LandingHeader from "../components/LandingHeader";
import Body from "../components/Body";
import Footer from "../components/Footer";
import theme from "../components/Theme";
import { ThemeProvider } from "styled-components";

function LandingPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <LandingHeader />
        <Body />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
