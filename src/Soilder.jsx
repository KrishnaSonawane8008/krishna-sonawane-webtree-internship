import React, { useEffect } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Soilder(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('src/assets/SoilderAssets/Soilder.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  
  useEffect(()=>{
    // console.log(actions)
    let anim_type=props.animation_Type
    switch(anim_type){
      case "Idle":
        actions.Idle.play();
        break;
      case "Run":
        actions.Run.play();
        break;
      case "Walk":
        actions.Walk.play();
        break;
      default:
        actions.TPose.play();
        
    }
  },[])

  return (
        <group ref={group} position={props.position} dispose={null} name="Character" rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh 
            name="vanguard_Mesh" 
            geometry={nodes.vanguard_Mesh.geometry} 
            material={materials.VanguardBodyMat} 
            skeleton={nodes.vanguard_Mesh.skeleton} 
            castShadow
            receiveShadow/>
          <skinnedMesh 
            name="vanguard_visor" 
            geometry={nodes.vanguard_visor.geometry} 
            material={materials.Vanguard_VisorMat} 
            skeleton={nodes.vanguard_visor.skeleton}
            castShadow 
            receiveShadow/>
        </group>
  )
}

useGLTF.preload('/Soilder.gltf')
