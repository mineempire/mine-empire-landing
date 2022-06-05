import theme from "../components/Theme";
import Footer from "../components/Footer";
import Header from "../components/Header";
import DashboardBody from "../components/DashboardBody";
import { ThemeProvider } from "styled-components";

function DashboardPage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <DashboardBody />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default DashboardPage;
