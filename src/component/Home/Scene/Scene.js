import { Box, HTML, Html, RoundedBox, useGLTFLoader } from "drei";
import React, { useRef, useEffect, Suspense } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Load from '../../../assets/loading.svg';
extend({ OrbitControls })

const Light = () => {
    return (
        <>
            <ambientLight intensity={0.8} color="#FFCD99" />
            <directionalLight position={[50, 10, 5]} intensity={0.3} />
            <spotLight position={[0, 50, 20]}  intensity={0.2} />
        </>

    )
}
const CameraControls = (event) => {
    const { camera, gl: { domElement } } = useThree();

    const controls = useRef();
    useFrame((state) => controls.current.update());

    return <orbitControls ref={controls} args={[camera, domElement]} />;
};

const Model = () => {
    const gltf = useGLTFLoader('/computer/scene.gltf', true);
    return <primitive object={gltf.scene} dispose={null} />;
}
function Loading() {
    return (
        <HTML>
            <div className="loadingContainer">
                <img src={Load} alt="loading..." />
                <h3>Chargement...</h3>
            </div>
        </HTML>
    )
}

export default function Scene() {


    return (

        <>
            <Canvas colorManagement camera={{ position: [150 / 2, 100 / 2, 175], fov: 100 }} >
                <CameraControls />
                <Light />
                <Suspense fallback={null}>
                    <mesh>
                        <Model />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    )
}