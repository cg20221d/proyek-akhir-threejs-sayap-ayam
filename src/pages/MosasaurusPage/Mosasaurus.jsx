import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../../utils/angleToRadians";
import { PerspectiveCamera } from "@react-three/drei";

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
  return (
    <mesh {...props}>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="black" />
    </mesh>
  );
};

const Mosasaurus = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 1, 5]} />
      <ambientLight args={["#FFF", 1]} />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
      <PlaneGeo rotation={[-angleToRadians(90), 0, 0]} />
    </>
  );
};

export default Mosasaurus;
