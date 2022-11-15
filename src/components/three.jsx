import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { angleToRadians } from "../utils/angleToRadians";

const Three = () => {
    
    const [ballRotation, setBallRotation] = useState(0);
    const orbitControlsRef = useRef(null);

    useFrame((state) => {
        setBallRotation(ballRotation + 0.01)

        if(!!orbitControlsRef.current){
            const {x, y} = state.mouse;

            orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(90));
            orbitControlsRef.current.setPolarAngle(y * angleToRadians(90));
            orbitControlsRef.current.update();
        }
    })

    useEffect(() => {
      if(orbitControlsRef != null) console.log(orbitControlsRef.current)
    }, [orbitControlsRef.current])
    
    
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,10,100]}></PerspectiveCamera>
        <OrbitControls autoRotate={false} ref={orbitControlsRef} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(80)}></OrbitControls>

        <mesh position={[10, 10, 0]} rotation={[ballRotation, ballRotation, ballRotation]}>
            <boxGeometry args={[7, 7, 7]}></boxGeometry>
            <meshStandardMaterial color="#ffffff"></meshStandardMaterial>
        </mesh>

        <mesh rotation={[-angleToRadians(90), 0, 0]}>
            <planeGeometry args={[100, 100]}></planeGeometry>
            <meshStandardMaterial color="#1ea3d8"></meshStandardMaterial>
        </mesh>

        <ambientLight args={['#0ff', 0.2]}></ambientLight>
        </>
    );
}

export default Three;