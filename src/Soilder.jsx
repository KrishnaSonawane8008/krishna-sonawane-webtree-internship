import React, { useEffect } from 'react'
import { useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export default function Soilder(props) {
  const group = React.useRef()
  const boxref=React.useRef()
  const { scene, animations } = useGLTF('/SoilderAssets/Soilder.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  
  useEffect(()=>{
    actions[props.animation_Type].play().fadeIn(0.5)

    if(props.animation_Type=="Run"){

      group.current.position.set(new THREE.Vector3(0,0,0))
      
      // console.log(group.current.matrixWorld.elements[2])
      // console.log(group.current.matrixWorld.elements[6])
      // console.log(group.current.matrixWorld.elements[10])
    }

    // world_matrix={
    //   x-axis: 0,4,8
    //   y-axis: 1,5,9
    //   z-axis: 2,6,10
    // }

  },[])

  useFrame(
    (state, delta, frame)=>{
      if(props.animation_Type=="Run"){

        group.current.position.set(0,0,0)
        group.current.rotation.x-=0.01;
        let basis=group.current.matrixWorld.extractBasis( 
          new THREE.Vector3(1,0,0),
          new THREE.Vector3(0,1,0),
          new THREE.Vector3(0,0,1)
         )
        let Up_axis=new THREE.Vector3(basis.elements[1],
                              basis.elements[5],
                              basis.elements[9]).normalize()
        boxref.current.position.set(-Up_axis.x, Up_axis.y, Up_axis.z)
        // group.current.position.set(Up_axis.x, Up_axis.y, Up_axis.z)
        // let new_dir_vec=new THREE.Vector3(0,2,0).applyAxisAngle(new THREE.Vector3(1,0,0), 
        // new THREE.Vector3(0,2,0).angleTo(new THREE.Vector3(
        //                                                     group.current.matrixWorld.elements[1],
        //                                                     group.current.matrixWorld.elements[5],
        //                                                     group.current.matrixWorld.elements[9])))

        // group.current.position.set(new_dir_vec.x, new_dir_vec.y, new_dir_vec.z)
        
      }
    }
  )

  return (
    <>
        <mesh ref={boxref}>
          <boxGeometry args={[0.2,0.2,0.2]}/>
          <meshStandardMaterial color={"lightgreen"}/>
        </mesh>
        <group ref={group} position={props.position} dispose={null} name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          
          <skinnedMesh 
            name="vanguard_Mesh" 
            geometry={nodes.vanguard_Mesh.geometry} 
            material={materials.VanguardBodyMat} 
            skeleton={nodes.vanguard_Mesh.skeleton} 
            castShadow
            receiveShadow>
          </skinnedMesh>

          <skinnedMesh 
            name="vanguard_visor" 
            geometry={nodes.vanguard_visor.geometry} 
            material={materials.Vanguard_VisorMat} 
            skeleton={nodes.vanguard_visor.skeleton}
            castShadow 
            receiveShadow>
          </skinnedMesh>
        </group>
    </>
  )
}

useGLTF.preload('/Soilder.gltf')
