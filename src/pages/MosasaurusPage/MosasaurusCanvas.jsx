import { Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { React, Suspense } from "react";
import MosasaurusModel from "./MosasaurusModel";
import "./Mosasaurus.css";

const MosasaurusCanvas = () => {
  return (
    // <div className="mosasaurusPage justify-content-center align-items-center row row-cols-2 m-0 p-0">
    //   <div className="col p-0 d-block">
    //     <Canvas id="mosasaurusCanvas" shadows>
    //       <Suspense fallback={null}>
    //         <MosasaurusModel />
    //         <gridHelper args={[100, 100, 0xff0000, "teal"]} />
    //       </Suspense>
    //     </Canvas>
    //   </div>
    //   <div className="col p-0 d-block">
    //     <div className="mosasaurusInfo">
    //       <h1>Mosasaurus</h1>
    //     </div>
    //   </div>
    // </div>
    <div className="mosasaurusPage m-0 p-0">
      <Canvas id="mosasaurusCanvas" shadows>
        <Suspense fallback={null}>
          <MosasaurusModel />
          <gridHelper args={[100, 100, 0xff0000, "teal"]} />
        </Suspense>
      </Canvas>
      <div className="mosasaurusInfo">
        <h1>Mosasaurus</h1>
      </div>
    </div>
  );
};

export default MosasaurusCanvas;
