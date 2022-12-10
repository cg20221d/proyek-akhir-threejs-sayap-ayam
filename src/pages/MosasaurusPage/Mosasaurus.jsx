import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { angleToRadians } from "../../utils/angleToRadians";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useEffect } from "react";

function Box(props) {
  const mesh = useRef();

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // useFrame((state, delta) => (mesh.current.rotation.x += delta));
  // useFrame((state, delta) => (mesh.current.rotation.y += delta));
  // useFrame((state, delta) => (mesh.current.rotation.z += delta));

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
      <sphereGeometry args={[1, 64, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

const PlaneGeo = (props) => {
  return (
    <mesh {...props}>
      <planeGeometry args={[100, 100]} />
      <meshPhongMaterial color="blue" />
    </mesh>
  );
};

const Mosasaurus = () => {
  const orbitControlsRef = useRef(null);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;
      // console.log(orbitControlsRef.current);
      orbitControlsRef.current.autoRotate = false;
      orbitControlsRef.current.rotateSpeed = 1;
      orbitControlsRef.current.autoRotateSpeed = 1.5;

      // orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      // orbitControlsRef.current.setPolarAngle((y + 0.5) * angleToRadians(90));
      orbitControlsRef.current.update();
    }
  });

  useEffect(() => {
    if (!!orbitControlsRef.current) {
      // orbitControlsRef.current.autoRotate = false;
      console.log(orbitControlsRef.current);
    }
  }, [orbitControlsRef.current]);

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
        args={["#FFF", 3, 7, angleToRadians(45), 0.4]}
        position={[-3, 2, 0]}
        castShadow
      />

      {/* MODEL */}
      <Box position={[0, 0, 0]} castShadow />
      <PlaneGeo rotation={[-angleToRadians(90), 0, 0]} receiveShadow />
    </>
  );
};

export default Mosasaurus;
