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

import Car from "./Car/Car";
import MuseumPlane from "./MuseumPlane";
import ModelScaler from "./models/ModelScaler";

const Three = () => {
  const spotlightArgs = [0xffffff, 2, 50, angleToRadians(45), 0, 2, 1];
  const stegoCoordinates = [-25, 0, 1];
  const spinoCoordinates = [-12.5, 0, 1];
  const trexCoordinates = [12.5, 0.5, 1];
  const triceratopsCoordinates = [25, 0.5, 1];

  const orbitControlsRef = useRef(null);


  //#region Third Person Camera State
  const [thirdPerson, setThirdPerson] = useState(true);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 0])

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
      {!thirdPerson &&
      (<OrbitControls target={[usrX, usrY, usrZ]}></OrbitControls>)}

      <Car thirdPerson={thirdPerson}></Car>

      {/* <ModelScaler></ModelScaler> */}
      
      <Stegosaurus scale={0.02} position={stegoCoordinates}></Stegosaurus>
      {/*155 - 145 mye*/}
      <spotLight
        args={spotlightArgs}
        position={[-25, 1, 10]}
        lookAt={spinoCoordinates}
        castShadow
      ></spotLight>


      <Spinosaurus scale={1.25} position={spinoCoordinates}></Spinosaurus>
      {/*99 - 93.5 mye*/}
      <spotLight
        args={spotlightArgs}
        position={[-12.5, 1, 10]}
        lookAt={spinoCoordinates}
        castShadow
      ></spotLight>


      <Tyrannosaurus scale={0.75} position={trexCoordinates}
      ></Tyrannosaurus>
      {/*68 - 66 mye*/}
      <spotLight
        args={spotlightArgs}
        position={[12.5, 1, 10]}
        lookAt={spinoCoordinates}
        castShadow
      ></spotLight>

      <Triceratops scale={1} position={triceratopsCoordinates}></Triceratops> {/*66 mye*/}
      <spotLight
        args={spotlightArgs}
        position={[25, 1, 10]}
        lookAt={spinoCoordinates}
        castShadow
      ></spotLight>


      <MuseumPlane></MuseumPlane>

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
