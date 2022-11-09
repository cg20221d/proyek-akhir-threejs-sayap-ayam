import React from "react";

function Box(props) {
  return (
    <mesh {...props} recieveShadow={true} castShadow={true}>
      <boxGeometry />
      <meshPhysicalMaterial color={"white"} />
    </mesh>
  );
}
export default Box;
