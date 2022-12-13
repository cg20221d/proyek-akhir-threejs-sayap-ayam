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
        <Link
          to="/spinosaurus"
          className="btn btn-outline-primary mb-3 d-block"
        >
          Go to Spinosaurus
        </Link>
        <Link
          to="/stegosaurus"
          className="btn btn-outline-primary mb-3 d-block"
        >
          Go to Stegosaurus
        </Link>
        <Link
          to="/triceratops"
          className="btn btn-outline-primary mb-3 d-block"
        >
          Go to Triceratops
        </Link>
        <Link
          to="/tyrannosaurus"
          className="btn btn-outline-primary mb-3 d-block"
        >
          Go to Tyrannosaurus
        </Link>
      </div>
    </>
  );
};
export default CanvasContainer;
