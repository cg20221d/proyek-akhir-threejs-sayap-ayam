const debug = true;

export const WheelDebug = ({radius, wheelRef}) => {
    return debug && (
        <group ref={wheelRef}>
            <mesh rotation={[0, 0, Math.PI/2]}>
                <cylinderGeometry args={[radius, radius, 0.5, 16]} />
                <meshNormalMaterial transparent opacity={0.3}/>
            </mesh>
        </group>
    )
}