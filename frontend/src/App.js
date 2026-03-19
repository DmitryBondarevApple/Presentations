import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "@/pages/Presentation";
import FranchCampPresentation from "@/pages/FranchCampPresentation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/franchcamp" element={<FranchCampPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
