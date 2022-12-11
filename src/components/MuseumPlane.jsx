import { usePlane } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import React from "react";
import { angleToRadians } from "../utils/angleToRadians";

const MuseumPlane = () => {
  const rotation = [-angleToRadians(90), 0, 0];

  const [ref] = usePlane(() => ({
    type: "Static",
    rotation: rotation,
  }));

  return (
    <>
      <mesh rotation={rotation} receiveShadow>
        <MeshReflectorMaterial
          metalness={0.05}
          roughness={0.4}
          dithering
          blur={[1024, 512]}
          mixBlur={3}
          color="#ffffff"
          mixStrength={30}
          resolution={256}
          mirror={0}
        />
        <circleGeometry args={[100, 64]}></circleGeometry>
      </mesh>
    </>
  );
};

export default MuseumPlane;
