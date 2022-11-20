import { Environment, OrbitControls, PerspectiveCamera } from "@react-three/drei";
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

    const ballRef = useRef(null);
    useEffect(() => {
        if(!!ballRef.current){
            console.log(ballRef.current)
            
            const timeline = gsap.timeline({
                paused: true,
            });

            //x-axis motion
            timeline.to(ballRef.current.position, {
                x: 27,
                duration: 3,
                ease: "power.out",
            }, 0);

            timeline.to(ballRef.current.position, {
                y: 7,
                duration: 2,
                ease: "bounce",
            }, "<");
            
            timeline.play();
        }

        console.log(DinosaurInfo);
    }, [])
    
    // {DinosaurInfo.map((dino, index) => {
    //     console.log(dino.length, dino.name)
    // })}

    let x = 12
    let y = 0
    let z = 0

    return(
        <>
        <PerspectiveCamera makeDefault={true} position={[0,10,100]}></PerspectiveCamera>
        <OrbitControls autoRotate={false} ref={orbitControlsRef} minPolarAngle={angleToRadians(40)} maxPolarAngle={angleToRadians(80)}></OrbitControls>

        {/* <mesh position={[0, 27, 0]} castShadow ref={ballRef}>
            <sphereGeometry args={[7, 32, 32]}></sphereGeometry>
            <meshStandardMaterial color="#ffffff" metalness={0.8} roughness={0.2}></meshStandardMaterial>
        </mesh>

        <mesh position={[-14, 12, 7]} castShadow>
            <boxGeometry args={[7,7,7]}></boxGeometry>
            <meshStandardMaterial color={0xffff} metalness={0.8} roughness={0.2}></meshStandardMaterial>
        </mesh> */}

        {DinosaurInfo.map((dino, index) => {
            return(
                <mesh key={index} position={[x + 25 * index, dino.length/2, z]} castShadow>
                    <boxGeometry args={[dino.length, dino.length, dino.length]}></boxGeometry>
                    <meshStandardMaterial color={0xffff} metalness={0.8} roughness={0.2}></meshStandardMaterial>
                </mesh>
            )
        })}

        {/* <Mosasaurus></Mosasaurus> */}
        {/* <Spinosaurus></Spinosaurus> */}
        {/* <Stegosaurus></Stegosaurus> */}
        {/* <Stygimoloch></Stygimoloch> */}
        {/* <Triceratops></Triceratops> */}
        <Tyrannosaurus scale={10}></Tyrannosaurus>

        <mesh rotation={[-angleToRadians(90), 0, 0]} receiveShadow>
            <planeGeometry args={[20000, 20000]}></planeGeometry>
            <meshStandardMaterial color="#1ea3d8"></meshStandardMaterial>
        </mesh>
        
        <ambientLight args={['#fff', 0.25]}></ambientLight>
        {/* <directionalLight args={['#fff', 0.5]} position={[10, 20, 10]}></directionalLight> */}
        {/* <pointLight args={['#fff', 0.5]} position={[10, 20, 10]}></pointLight> */}
        <spotLight args={['#fff', 5, 100, angleToRadians(90), 0.4, 2, 1]} position={[10, 20, 10]} castShadow></spotLight>

        <Environment background>
            <mesh scale={1000}>
                <sphereGeometry args={[1,100,100]}></sphereGeometry>
                <meshBasicMaterial color={0x2280cc} side={THREE.BackSide}></meshBasicMaterial>
            </mesh>
        </Environment>
        </>
    );
}

export default Three;