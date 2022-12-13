import React, { Suspense } from "react";
import Three from "./three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Link } from "react-router-dom";

import "./canvasContainer.css";

const CanvasContainer = () => {
  return (
    <>
      <Canvas id="museum-canvas" shadows>
        <Suspense fallback={null}>
          <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
            <Three></Three>
          </Physics>
        </Suspense>
      </Canvas>

      <div className="controls">
        <p className="me-3 controls-text mb-3">press w a s d to move</p>
        <Link
          to="/spinosaurus"
          className="controls-link btn btn-outline-primary mx-3"
        >
          Go to Spinosaurus
        </Link>
        <Link
          to="/stegosaurus"
          className="controls-link btn btn-outline-primary me-3"
        >
          Go to Stegosaurus
        </Link>
        <Link
          to="/triceratops"
          className="controls-link btn btn-outline-primary me-3"
        >
          Go to Triceratops
        </Link>
        <Link
          to="/tyrannosaurus"
          className="controls-link btn btn-outline-primary me-3"
        >
          Go to Tyrannosaurus
        </Link>
      </div>
    </>
  );
};
export default CanvasContainer;
