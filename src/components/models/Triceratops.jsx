/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: DailyArt (https://sketchfab.com/D.art)
license: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
source: https://sketchfab.com/3d-models/triceratops-909bf645de1746829ab19acd1ae31767
title: Triceratops
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Triceratops(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/triceratops/triceratops-transformed.glb')
  const { actions } = useAnimations(animations, group)
  
  const {scale, position, rotation} = props;
  return (
    <group ref={group} {...props} dispose={null} scale={scale} position={position} rotation={rotation}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Bip001_88" position={[0, 2.02, -0.83]} rotation={[0.04, -Math.PI / 2, 0]} scale={0.03}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.sanjiaolong} skeleton={nodes.Object_7.skeleton} />
                  <skinnedMesh name="Object_9" geometry={nodes.Object_9.geometry} material={materials.sanjiaolong} skeleton={nodes.Object_9.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/triceratops/triceratops-transformed.glb')
