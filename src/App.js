import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LandingPage from "./pages/Landing";
import CosmosPage from "./pages/Cosmos";
import MarketPage from "./pages/Market";
import RefineryPage from "./pages/Refinery";
import ConverterPage from "./pages/Converter";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/cosmos" element={<CosmosPage />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/refinery" element={<RefineryPage />} />
        <Route path="/converter" element={<ConverterPage />} />
      </Routes>
    </div>
  );
}

export default App;
