import React, { Suspense } from "react";
import Three from "./three";
import { Canvas } from "@react-three/fiber";

const CanvasContainer = () => {
  return (
    <Canvas id="museum-canvas" shadows>
      <Suspense fallback={null}>
        <Three></Three>
      </Suspense>
    </Canvas>
  );
};
export default CanvasContainer;
