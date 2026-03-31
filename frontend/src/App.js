import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmergentPresentation from "@/pages/EmergentPresentation";

function App() {
  return (
    <BrowserRouter basename="/emergent">
      <Routes>
        <Route path="/" element={<EmergentPresentation />} />
        <Route path="*" element={<EmergentPresentation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
