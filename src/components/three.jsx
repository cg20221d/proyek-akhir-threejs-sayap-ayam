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

import { Mosasaurus } from "./models/Mosasaurus";
import { Spinosaurus } from "./models/Spinosaurus";
import { Stegosaurus } from "./models/Stegosaurus";
import { Stygimoloch } from "./models/Stygimoloch";
import { Triceratops } from "./models/Triceratops";
import { Tyrannosaurus } from "./models/Tyrannosaurus";

import DinosaurInfo from "../API/dinosaur";
import User from "./User/User";
import MuseumPlane from "./MuseumPlane";

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

  useEffect(() => {
    console.log(DinosaurInfo);
  }, []);

  let x = 12;
  let y = 0;
  let z = 0;

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

      {DinosaurInfo.map((dino, index) => {
        return (
          <mesh
            key={index}
            position={[x + 25 * index, dino.length / 2, z]}
            castShadow
          >
            <boxGeometry
              args={[dino.length, dino.length, dino.length]}
            ></boxGeometry>
            <meshStandardMaterial
              color={0xffff}
              metalness={0.8}
              roughness={0.2}
            ></meshStandardMaterial>
          </mesh>
        );
      })}

      <Mosasaurus scale={0.05} position={[12, 15, 1]}></Mosasaurus>
      <Spinosaurus position={[15, 15, 1]}></Spinosaurus>
      <Stegosaurus scale={0.05}></Stegosaurus>
      <Stygimoloch scale={0.05}></Stygimoloch>
      <Triceratops scale={5} position={[60, 15, 1]}></Triceratops>
      <Tyrannosaurus scale={3} position={[40, 15, 1]}></Tyrannosaurus>

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
