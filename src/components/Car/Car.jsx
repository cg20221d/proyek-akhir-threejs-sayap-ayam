import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React from "react";
import useWheels from "./useWheels";
import { WheelDebug } from "./WheelDebug";

const Car = () => {
  // "(FREE) Cyberpunk Hovercar" (https://skfb.ly/6WyrM) by Karol Miklas is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).
  const mesh = useLoader(GLTFLoader, "/models/hovercar/hovercar.glb").scene;
  const scale = [0.1, 0.1, 0.1];
  const spawn = [-365, -18, -67];

  const position = [-1.5, 0.5, 3];
  const width = 0.15;
  const height = 0.07;
  const front = 0.15;
  const wheelRadius = 0.05;

  const chassisBodyArgs = [width, height, front * 2];
  const [chassisBody, chassisApi] = useBox(
    () => ({
      args: chassisBodyArgs,
      mass: 150,
      position,
    }),
    useRef(null)
  );

  const [wheels, wheelInfos] = useWheels(width, height, front, wheelRadius);

  // const [vehicle, vehicleApi] = useRaycastVehicle(
  //   () => ({
  //     chassisBody,
  //     wheelInfos,
  //     wheels,
  //   }),
  //   useRef(null)
  // );

  useEffect(() => {
    mesh.scale.set(scale);
    mesh.children[0].position.set(spawn);
  }, [mesh]);

  return (
    <group 
    // ref={vehicle} 
    name="hovercar">
      {/* <primitive object={mesh} rotation-y={Math.PI} /> */}
      <mesh ref={chassisBody}>
        <meshBasicMaterial
          transparent={true}
          opacity={0.3}
          color={0x000000}
        ></meshBasicMaterial>
        <boxGeometry args={chassisBodyArgs}></boxGeometry>
      </mesh>

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius}/>
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius}/>
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius}/>
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius}/>
    </group>
  );
};

export default Car;
