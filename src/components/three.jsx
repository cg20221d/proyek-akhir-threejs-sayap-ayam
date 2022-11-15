import { PerspectiveCamera } from "@react-three/drei";
import { PlaneGeometry } from "three";
import { angleToRadians } from "../utils/angleToRadians";

const Three = () => {
    return(
        <>
        <PerspectiveCamera makeDefault position={[0,1,10]}></PerspectiveCamera>

        <mesh position={[0, 4, 0]}>
            <sphereGeometry args={[0.75, 32, 32]}></sphereGeometry>
            <meshStandardMaterial color="#ffffff"></meshStandardMaterial>
        </mesh>

        <mesh rotation={[-angleToRadians(90), 0, 0]}>
            <planeGeometry args={[100, 100]}></planeGeometry>
            <meshBasicMaterial color="#1ea3d8"></meshBasicMaterial>
        </mesh>

        <ambientLight args={[0xff0000, 0.1]}></ambientLight>
        </>
    );
}

export default Three;