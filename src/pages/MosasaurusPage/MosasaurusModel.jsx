import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../../utils/angleToRadians";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  useEnvironment,
} from "@react-three/drei";
// import { useEffect } from "react";
import * as THREE from "three";
import { Mosasaurus } from "../../components/models/Mosasaurus";
import { Tyrannosaurus } from "../../components/models/Tyrannosaurus";

// import Texture from "./assets/texture.hdr";

function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => (mesh.current.rotation.x += delta));
  useFrame((state, delta) => (mesh.current.rotation.y += delta));
  useFrame((state, delta) => (mesh.current.rotation.z += delta));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      position={[0, 1, 0]}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const PlaneGeo = (props) => {
  const map = useEnvironment({ files: "./assets/texture.hdr" });
  return (
    <mesh {...props}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial map={map} />
    </mesh>
  );
};

const MosasaurusModel = () => {
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
    }
  });

  return (
    <>
      {/* CAMERA */}
      <PerspectiveCamera makeDefault position={[4, 4, 10]} />
      <OrbitControls
        ref={orbitControlsRef}
        maxPolarAngle={angleToRadians(89)}
      />

      {/* LIGHT */}
      <ambientLight args={["#FFF", 0.25]} />
      <spotLight
        args={["#FFF", 5, 10, angleToRadians(60), 0.4]}
        position={[-3, 4, 0]}
        castShadow
      />

      {/* MODEL */}
      {/* <Box position={[0, 0, 0]} castShadow /> */}
      <PlaneGeo rotation={[-angleToRadians(90), 0, 0]} receiveShadow />

      <Mosasaurus
        scale={0.02}
        position={[1, 1, 0]}
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

export default MosasaurusModel;
