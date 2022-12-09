import { useFrame } from "@react-three/fiber";
import { useEffect, useState } from "react";

export const useControls = (userApi) => {
  let [controls, setControls] = useState({
    w: false,
    a: false,
    s: false,
    d: false,
  });

  useEffect(() => {
    const keyDownHandler = (e) => {
      setControls((controls) => ({
        ...controls,
        [e.key.toLowerCase()]: true,
      }));
    };

    const keyUpHandler = (e) => {
      setControls((controls) => ({
        ...controls,
        [e.key.toLowerCase()]: false,
      }));
    };

    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  useEffect(() => {
    console.log(controls);

    if (controls.w) {
      accelerationZ(z + 1);
    }
    if (controls.a) {
      accelerationX(x - 1);
    }
    if (controls.s) {
      accelerationZ(z - 1);
    }
    if (controls.d) {
      accelerationX(x + 1);
      // userApi.
    }
  }, [controls]);

  // useFrame(() => {
  //             if(controls.w){
  //         accelerationZ(z+movementSpeed);
  //     }if(controls.a){
  //         accelerationX(x-movementSpeed);
  //     }if(controls.s){
  //         accelerationZ(z-movementSpeed);
  //     }if(controls.d){
  //         accelerationX(x+movementSpeed);
  //     }
  // })

  return controls;
};
