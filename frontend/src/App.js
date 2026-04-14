import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentation from "@/pages/Presentation";
import FranchCampPresentation from "@/pages/FranchCampPresentation";
import EmergentPresentation from "@/pages/EmergentPresentation";
import MakeUsBeautifulPresentation from "@/pages/MakeUsBeautifulPresentation";
import NoteAllInvestPresentation from "@/pages/NoteAllInvestPresentation";
import NoteAllOnePager from "@/pages/NoteAllOnePager";
import AX10Presentation from "@/pages/AX10Presentation";
import AX10OnePager from "@/pages/AX10OnePager";
import NoteAllProductPresentation from "@/pages/NoteAllProductPresentation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Presentation />} />
        <Route path="/franchcamp" element={<FranchCampPresentation />} />
        <Route path="/emergent" element={<EmergentPresentation />} />
        <Route path="/makeusbeautiful" element={<MakeUsBeautifulPresentation />} />
        <Route path="/invest" element={<NoteAllInvestPresentation />} />
        <Route path="/onepager" element={<NoteAllOnePager />} />
        <Route path="/ax10" element={<AX10Presentation />} />
        <Route path="/ax10-onepager" element={<AX10OnePager />} />
        <Route path="/product" element={<NoteAllProductPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
