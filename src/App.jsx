import { Suspense, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import CanvasContainer from "./components/CanvasContainer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CanvasContainer />} />
      {/* <Route path="/ferdi" element={<CanvasContainer />} /> */}
    </Routes>
  );
}

export default App;
