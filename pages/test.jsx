import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Box from "../components/Box";
import Floor from "../components/Floor";
import LightBulb from "../components/LightBulb";
import css from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={css.scene}>
      <Canvas
        shadows={true}
        className={css.canvas}
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={1} />
        <LightBulb position={[0, 3, 0]} />
        <Box rotateX={3} rotateY={0.2} />
        {/* <OrbitControls /> */}
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}
