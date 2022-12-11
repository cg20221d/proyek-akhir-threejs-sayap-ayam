import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import MosasaurusModel from "./MosasaurusModel";
import "./Mosasaurus.css";

const MosasaurusCanvas = () => {
  return (
    <div className="mosasaurusPage">
      <Canvas id="mosasaurusCanvas" shadows>
        <Suspense fallback={null}>
          <MosasaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
          {/* <Html>
            <div className="mosasaurusPage__title">
              <h1>Mosasaurus</h1>
            </div>
          </Html> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MosasaurusCanvas;
