import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../../utils/angleToRadians";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";
import * as THREE from "three";
import { Tyrannosaurus } from "../../components/models/Tyrannosaurus";
import { Triceratops } from "../../components/models/Triceratops";

const PlaneGeo = (props) => {
  const map = useEnvironment({ files: "./assets/texture.hdr" });
  return (
    <mesh {...props}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial map={map} />
    </mesh>
  );
};

const TyrannosaurusModel = () => {
  const map = useEnvironment({ files: "./assets/texture.hdr" });
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(orbitControlsRef.current);
      orbitControlsRef.current.autoRotate = true;
      orbitControlsRef.current.rotateSpeed = 1;
      orbitControlsRef.current.autoRotateSpeed = 1.5;

      // orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      // orbitControlsRef.current.setPolarAngle((y + 0.5) * angleToRadians(90));
      orbitControlsRef.current.update();

      // console.log(orbitControlsRef);
    }
  });

  return (
    <>
      {/* CAMERA */}
      <PerspectiveCamera makeDefault position={[4, 4, 10]} />
      <OrbitControls
        ref={orbitControlsRef}
        maxPolarAngle={angleToRadians(89)}
        minDistance={23}
        maxDistance={50}
      />

      {/* LIGHT */}
      <ambientLight args={["#FFF", 0.25]} />
      <spotLight
        args={["#FFF", 5, 40, angleToRadians(60), 0.4]}
        position={[-17, 6, 0]}
        castShadow
      />

      {/* MODEL */}
      {/* <Box position={[0, 0, 0]} castShadow /> */}
      <PlaneGeo rotation={[-angleToRadians(90), 0, 0]} receiveShadow />

      <Tyrannosaurus
        scale={2}
        position={[5, 1, 0]}
        rotation={[0, -angleToRadians(90), 0]}
      />
      {/* <Environment files="./assets/texture.hdr" background /> */}
      <Environment background near={1} far={1000} resolution={1080}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial map={map} side={THREE.BackSide} />
        </mesh>
      </Environment>
    </>
  );
};

export default TyrannosaurusModel;
