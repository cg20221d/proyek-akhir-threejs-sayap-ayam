import React from 'react'
import DinosaurInfo from "../../API/dinosaur.json";

const ModelScaler = () => {
  let x = 12;
  let y = 0;
  let z = 0;

  return (
    <>
    {DinosaurInfo.map((dino, index) => {
        return (
          <mesh
            key={index}
            position={[x + 10 * index, dino.length / 2, z]}
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
    </>
  )
}

export default ModelScaler