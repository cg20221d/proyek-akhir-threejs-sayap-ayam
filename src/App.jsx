import "./App.css";
import { Routes, Route } from "react-router-dom";
import CanvasContainer from "./components/CanvasContainer";
import Home from "./pages/Home/Home";
import SpinosaurusCanvas from "./pages/SpinosaurusPage/SpinosaurusCanvas";
import StegosaurusCanvas from "./pages/StegosaurusPage/StegosaurusCanvas";
import TriceratopsCanvas from "./pages/TriceratopsPage/TriceratopsCanvas";
import TyrannosaurusCanvas from "./pages/TyrannosaurusPage/TyrannosaurusCanvas";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/world" element={<CanvasContainer />} />
        <Route path="/tyrannosaurus" element={<TyrannosaurusCanvas />} />
        <Route path="/spinosaurus" element={<SpinosaurusCanvas />} />
        <Route path="/stegosaurus" element={<StegosaurusCanvas />} />
        <Route path="/triceratops" element={<TriceratopsCanvas />} />
      </Routes>
    </>
  );
}

export default App;
