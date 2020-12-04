import { Html, RoundedBox, useGLTFLoader } from "drei";
import React, { useRef, useEffect, Suspense, useState } from "react";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { getMouseDegrees } from "../utils";

extend({ OrbitControls })

export default function Scene() {


    const mouse = useRef({ x: 0, y: 0 });

    let Mouse;
    function getMousePos(e) {

        return Mouse = { x: e.clientX, y: e.clientY }
    }



    const Light = () => {
        return (
            <>
                <ambientLight intensity={0.8} />
                <directionalLight position={[-250, 10, 5]} intensity={0.3} />
                <spotLight position={[-500, 100, -200]} color="#15F4EE" intensity={1.5} />
            </>

        )
    }
    const CameraControls = ({ mouse }) => {
        const { camera, gl: { domElement }, } = useThree();
        var x = null;
        var y = null;

        document.addEventListener('mousemove', onMouseUpdate, false);
        document.addEventListener('mouseenter', onMouseUpdate, false);

        function onMouseUpdate(e) {
            x = e.pageX;
            y = e.pageY;
            if (camera.position !== undefined) {
                camera.position.set((-x + 650) / 100, (y + -500) / 100, 10)
            }

        }


        const controls = useRef();
        useFrame((state) => {
            if (controls.current !== null){
                controls.current.update()
            }
        });
        return <orbitControls ref={controls} args={[camera, domElement]} />;
    };

    const Model = () => {
        const gltf = useGLTFLoader('/me.gltf', true);
        return <primitive object={gltf.scene} dispose={null} />;
    }


    return (

        <>
            <Canvas
                onMouseMove={(e) => (mouse.current = getMousePos(e))}
                colorManagement camera={{ position: [0, 0, 10], fov: 16 }} >
                <CameraControls mouse={mouse.current} />
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