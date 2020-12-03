// Auto-generated by https://github.com/react-spring/gltfjsx

import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
import { useLoader, useFrame } from "react-three-fiber"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { getMouseDegrees } from "../utils"


function moveJoint(mouse, joint, degreeLimit = 40) {
  let degrees = getMouseDegrees(mouse.current.x, mouse.current.y, degreeLimit)
  joint.rotation.xD = THREE.MathUtils.lerp(joint.rotation.xD || 0, degrees.y, 0.1)
  joint.rotation.yD = THREE.MathUtils.lerp(joint.rotation.yD || 0, degrees.x, 0.1)
  joint.rotation.x = THREE.Math.degToRad(joint.rotation.xD)
  joint.rotation.y = THREE.Math.degToRad(joint.rotation.yD)
}

export default function Model({ mouse, ...props }) {
  const group = useRef()
  const { nodes } = useLoader(GLTFLoader, "/me.gltf")


  useFrame((state, delta) => {
    mixer.update(delta)
    moveJoint(mouse, nodes.mixamorigNeck)
    moveJoint(mouse, nodes.mixamorigSpine)
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
      <primitive object={gltf.scene} dispose={null} />
      </group>
    </group>
  )
}