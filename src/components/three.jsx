import {
  Environment,
  FirstPersonControls,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { angleToRadians } from "../utils/angleToRadians";
import * as THREE from "three";
import gsap from "gsap";

import { Spinosaurus } from "./models/Spinosaurus";
import { Stegosaurus } from "./models/Stegosaurus";
import { Triceratops } from "./models/Triceratops";
import { Tyrannosaurus } from "./models/Tyrannosaurus";

import DinosaurInfo from "../API/dinosaur";
import User from "./User/User";
import MuseumPlane from "./MuseumPlane";
import ModelScaler from "./models/ModelScaler";

const Three = () => {
  const orbitControlsRef = useRef(null);

  const [usrX, setUsrX] = useState(0);
  const [usrY, setUsrY] = useState(10);
  const [usrZ, setUsrZ] = useState(0);

  useFrame((state) => {
    if (!!orbitControlsRef.current) {
      const { x, y } = state.mouse;

      orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
      orbitControlsRef.current.setPolarAngle(y * angleToRadians(90));
      orbitControlsRef.current.update();
    }
  });

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={[100, 100, 110]}
        fov={40}
      ></PerspectiveCamera>
      <OrbitControls target={[usrX, usrY, usrZ]}></OrbitControls>

      <User
        position={[usrX, usrY, usrZ]}
        setUsrX={setUsrX}
        setUsrZ={setUsrZ}
        setUsrY={setUsrY}
      ></User>

      {/* <ModelScaler></ModelScaler> */}

      <Stegosaurus scale={0.020}></Stegosaurus> {/*155 - 145 mye*/}
      <Spinosaurus scale={1.25} position={[15, 15, 1]}></Spinosaurus> {/*99 - 93.5 mye*/}
      <Tyrannosaurus scale={0.75} position={[40, 15, 1]}></Tyrannosaurus> {/*68 - 66 mye*/}
      <Triceratops scale={1} position={[50, 10, 1]}></Triceratops> {/*66 mye*/}

      <MuseumPlane></MuseumPlane>

      <ambientLight args={["#fff", 0.25]}></ambientLight>
      <spotLight
        args={["#fff", 5, 100, angleToRadians(90), 0.4, 2, 1]}
        position={[10, 20, 10]}
        castShadow
      ></spotLight>

      <Environment background>
        <mesh scale={1000}>
          <sphereGeometry args={[1, 100, 100]}></sphereGeometry>
          <meshBasicMaterial
            color={0x2280cc}
            side={THREE.BackSide}
          ></meshBasicMaterial>
        </mesh>
      </Environment>
    </>
  );
};

export default Three;
