import "./App.css";
import { Routes, Route } from "react-router-dom";
import CanvasContainer from "./components/CanvasContainer";
import Home from "./pages/Home/Home";
import MosasaurusCanvas from "./pages/MosasaurusPage/MosasaurusCanvas";
import SpinosaurusCanvas from "./pages/SpinosaurusPage/SpinosaurusCanvas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<CanvasContainer />} />
        <Route path="/mosasaurus" element={<MosasaurusCanvas />} />
        <Route path="/spinosaurus" element={<SpinosaurusCanvas />} />
      </Routes>
    </>
  );
}

export default App;
