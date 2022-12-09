import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";

const MosasaurusPage = () => {
  return (
    <div className="mosasaurusPage">
      <Canvas id="mosasaurusCanvas" shadows>
        <Suspense fallback={null}>
          <Html>
            <h1>Test</h1>
          </Html>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MosasaurusPage;
