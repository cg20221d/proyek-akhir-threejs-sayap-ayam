import "./App.css";
import { Routes, Route } from "react-router-dom";
import CanvasContainer from "./components/CanvasContainer";
import Home from "./pages/Home/Home";
// import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<CanvasContainer />} />
      </Routes>
    </>
  );
}

export default App;
