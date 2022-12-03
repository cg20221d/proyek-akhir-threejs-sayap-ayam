import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";
import { angleToRadians } from "../utils/angleToRadians";

const MuseumPlane = () => {
  return (
    <>
      <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
        <circleGeometry args={[100, 64]}></circleGeometry>
        <MeshReflectorMaterial

            metalness={0.05}
            roughness={0.4}
            dithering
            blur={[1024, 512]}
            mixBlur={3}
            color={0x000000}
            mixStrength={30}
            resolution={256}
            mirror={0}
        />
      </mesh>
    </>
  );
};

export default MuseumPlane;
