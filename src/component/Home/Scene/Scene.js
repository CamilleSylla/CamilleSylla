import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Scene() {
    const ref = useRef();

    useEffect(() => {
        const width = ref.clientWidth;
        const height = ref.clientHeight;
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(width, height);
        ref.current.appendChild(renderer.domElement);

        const loader = new GLTFLoader();

        const dracoLoader = new DRACOLoader();
        dracoLoader.setDecoderPath('./');
        loader.setDRACOLoader(dracoLoader)

        loader.load(

            './scene.gltf',

            function (gltf) {
                scene.add(gltf.scene);
            },
            function ( xhr ) {

                console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
        
            },
            // called when loading has errors
            function ( error ) {
        
                console.log( 'An error happened' );
        
            }

        )

    });

    return <div ref={ref} />;
}