import { useBox, useRaycastVehicle } from "@react-three/cannon";
import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import React from "react";
import useWheels from "./useWheels";
import { useControls } from "./useControls";
import { WheelDebug } from "./WheelDebug";
import { useGLTF } from "@react-three/drei";
import { Quaternion, Vector3 } from "three";

const Car = ({thirdPerson}) => {
  // "UFO Doodle" (https://skfb.ly/ozxTn) by re1monsen is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
  let result = useLoader(
    GLTFLoader,
    "/models/ufo/ufo.glb"
  ).scene;

  console.log(result);
  const scale = 0.25

  const position = [0, 0, 0];
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

  useFrame((state) => {
    if(!thirdPerson) return;
    
    let position = new Vector3(0, 0, 0);
    position.setFromMatrixPosition(chassisBody.current.matrixWorld);

    let quaternion = new Quaternion(0, 0, 0, 0);
    quaternion.setFromRotationMatrix(chassisBody.current.matrixWorld);

    let wDirection = new Vector3(0, 0, -1);
    wDirection.applyQuaternion(quaternion);
    wDirection.normalize();

    let cameraPosition = position.clone().add(
      wDirection.clone().multiplyScalar(-1).add(
        new Vector3(0, 25, 50)
      )
    );

    state.camera.position.copy(cameraPosition);
    state.camera.lookAt(position);
  })

  useEffect(() => {
    if (!result) return;

    let mesh = result;
    mesh.scale.set(scale, scale, scale);

    mesh.children[0].position.set(0, 2, 0);
  }, [result]);

  return (
    <group ref={vehicle} name="ufo">
      <group ref={chassisBody} name="chassisBody">
        <primitive object={result} rotation-y={Math.PI}/>
      </group>

      {/* <mesh ref={chassisBody}>
        <meshBasicMaterial
          transparent={true}
          opacity={0.3}
          color={0x000000}
        ></meshBasicMaterial>
        <boxGeometry args={chassisBodyArgs}></boxGeometry>
      </mesh> */}

      <WheelDebug wheelRef={wheels[0]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[1]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[2]} radius={wheelRadius} />
      <WheelDebug wheelRef={wheels[3]} radius={wheelRadius} />
    </group>
  );
};

export default Car;
