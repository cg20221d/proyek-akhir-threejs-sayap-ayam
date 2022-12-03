import React, { Suspense } from "react";
import Three from "./three";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

const CanvasContainer = () => {
  return (
    <Canvas id="museum-canvas" shadows>
      <Suspense fallback={null}>
        <Physics broadphase="SAP" gravity={[0, -2.6, 0]}>
          <Three></Three>
        </Physics>
      </Suspense>
    </Canvas>
  );
};
export default CanvasContainer;
