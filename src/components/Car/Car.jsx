import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React from "react";
import useWheels from "./useWheels";
import { useControls } from "./useControls";
import { WheelDebug } from "./WheelDebug";
import { useGLTF } from "@react-three/drei";

const Car = () => {
  // "(FREE) Cyberpunk Hovercar" (https://skfb.ly/6WyrM) by Karol Miklas is licensed under Creative Commons Attribution-ShareAlike (http://creativecommons.org/licenses/by-sa/4.0/).
  let result = useLoader(
    GLTFLoader,
    "/models/hovercar.glb"
  ).scene;

  console.log(result);
  const scale = 1

  const position = [-1.5, 0.5, 3];
  const width = 1.5;
  const height = 0.7;
  const front = 1.5;
  const wheelRadius = 0.5;

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

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos,
      wheels,
    }),
    useRef(null)
  );

  useControls(vehicleApi, chassisApi);

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh.scale.set(scale, scale, scale);

    mesh.children[0].position.set(0, 0, 0);
  }, [result]);

  return (
    <group
      ref={vehicle}
      name="hovercar"
    >
      <group ref={chassisBody} name="chassisBody">
        <primitive object={result} rotation-y={Math.PI} position={[0, -0.09, 0]}/>
      </group>

      <mesh ref={chassisBody}>
        <meshBasicMaterial
          transparent={true}
          opacity={0.3}
          color={0x000000}
        ></meshBasicMaterial>
        <boxGeometry args={chassisBodyArgs}></boxGeometry>
      </mesh>

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
};

export default Car;
