import { Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LandingPage from "./pages/Landing";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
