/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/Avatar/Avatar.gltf 
*/

import React, {useState, useEffect, useRef} from 'react'
import {useFrame, useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import { LoopOnce } from 'three'


let intervals=[]
let timeouts=[]
let played_anims=[]
export default function Avatar(props) {
  const group = React.useRef()

  const hip_ref=React.useRef()
  const { scene, animations } = useGLTF('/Avatar/Avatar.gltf')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  const [ interval_array,  setArray]=useState({lst:[]})
  const [new_pos, setPos]=useState([0,0,0])
  useEffect( ()=>{
    console.log("in avatar", " animation: ", props.animation)
    actions["defence_01"].stop()
    actions["defence_02"].stop()
    actions["defence_03"].stop()
    actions["defence_04"].stop()
    actions["attack_01"].stop()
    actions["attack_02"].stop()
    actions["attack_03"].stop()
    actions["attack_04"].stop()
    props.pcallback(actions[props.animation])
    setPos(props.pos)

  }, [props.animation, props.pos] )
  

// const interval= useRef(null)
// const outer_timeout= useRef(null)
// const inner_timeout= useRef(null)

// useEffect( ()=>{
//   // console.log(props.Some_obj.anim)
//   // for( let i = 0; i < intervals.length; i++){
//   //     clearInterval(intervals[i]);
//   // }
//   // intervals=[]
//   // for( let i = 0; i < timeouts.length; i++){
//   //   clearTimeout(timeouts[i])
//   // }
//   // timeouts=[]
  
//   for( let i = 0; i < played_anims.length; i++){
//     let current_act=actions[played_anims[i]]
//     if(current_act.isRunning()){
//       current_act.stop()
//     }
//   }
//   played_anims=[]

//   played_anims.push(props.Some_obj.anim)
//   let interval_after= ((props.Some_obj.pause_after*1000*(actions[props.Some_obj.anim]._clip.duration))/100) + props.Some_obj.start_after
  
//   group.current.position.set( props.Some_obj.initial_pos[0], props.Some_obj.initial_pos[1], props.Some_obj.initial_pos[2] )
  
//   // console.log("UseEffect: ",props.Some_obj.anim)
  
  
  
//   interval.current=setInterval( ()=>{
//     console.log("Inside Interval: ",props.Some_obj.anim)
//     group.current.position.set( props.Some_obj.initial_pos[0], props.Some_obj.initial_pos[1], props.Some_obj.initial_pos[2] )
//     // custom_play( props.Some_obj.anim, props.Some_obj.start_after, props.Some_obj.pause_after, props.Some_obj.end_after_pausing )
  

//     outer_timeout.current=setTimeout( ()=>{

//       actions[props.Some_obj.anim].reset().play()

//       inner_timeout.current=setTimeout( ()=>{
//         actions[props.Some_obj.anim].paused=true
//         let new_pos=hip_ref.current.position
//         let z_sign=Math.sign(group.current.matrix.elements[10])

//         if(props.Some_obj.end_after_pausing){
//           group.current.position.z += new_pos.z*1.851*z_sign
//           actions[props.Some_obj.anim].stop()
//         }

//       }, (props.Some_obj.pause_after*1000*(actions[props.Some_obj.anim]._clip.duration))/100 )
//       timeouts.push(inner_timeout)

//     }, props.Some_obj.start_after )

//     timeouts.push(outer_timeout)
  
//   }, props.Some_obj.end_delay )
//   // intervals.push(interval)
  
//   return () => {
//     clearInterval(interval.current)
//     clearTimeout(outer_timeout.current)
//     clearTimeout(inner_timeout.current)
//   }; 

//   },[props.Some_obj])



  return (
    <group ref={group} position={new_pos} rotation={props.rotation} dispose={null}>
      <group name="Scene">
        <group name="Armature" scale={1.851}>
          <primitive ref={hip_ref} object={nodes.mixamorigHips}>
          </primitive>
          <primitive object={nodes.Ctrl_Master} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Left} />
          <primitive object={nodes.Ctrl_Hand_IK_Left} />
          <primitive object={nodes.Ctrl_ArmPole_IK_Right} />
          <primitive object={nodes.Ctrl_Hand_IK_Right} />
          <primitive object={nodes.Ctrl_Foot_IK_Left} />
          <primitive object={nodes.Ctrl_LegPole_IK_Left} />
          <primitive object={nodes.Ctrl_Foot_IK_Right} />
          <primitive object={nodes.Ctrl_LegPole_IK_Right} />
          <group name="EyeLeft" />
          <group name="EyeRight" />
          <group name="Wolf3D_Hair001" />
          <group name="Wolf3D_Head" />
          <group name="Wolf3D_Teeth001" />
          <group name="Wolf3D_Teeth002" />
          <group name="Wolf3D_Teeth003" />
          <skinnedMesh name="00000027006_Baked_Baked" geometry={nodes['00000027006_Baked_Baked'].geometry} material={materials['backed energy waves']} skeleton={nodes['00000027006_Baked_Baked'].skeleton} />
          <skinnedMesh name="00000027007_Baked_Baked" geometry={nodes['00000027007_Baked_Baked'].geometry} material={materials['backed energy waves']} skeleton={nodes['00000027007_Baked_Baked'].skeleton} />
          <group name="boot">
            <skinnedMesh name="bootmesh001" geometry={nodes.bootmesh001.geometry} material={materials.foot} skeleton={nodes.bootmesh001.skeleton} />
            <skinnedMesh name="bootmesh001_1" geometry={nodes.bootmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.bootmesh001_1.skeleton} />
          </group>
          <group name="dand_r">
            <skinnedMesh name="dand_rmesh001" geometry={nodes.dand_rmesh001.geometry} material={materials['elbow r']} skeleton={nodes.dand_rmesh001.skeleton} />
            <skinnedMesh name="dand_rmesh001_1" geometry={nodes.dand_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.dand_rmesh001_1.skeleton} />
          </group>
          <group name="elbow_l">
            <skinnedMesh name="elbow_lmesh001" geometry={nodes.elbow_lmesh001.geometry} material={materials['hand l']} skeleton={nodes.elbow_lmesh001.skeleton} />
            <skinnedMesh name="elbow_lmesh001_1" geometry={nodes.elbow_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.elbow_lmesh001_1.skeleton} />
          </group>
          <group name="elbow_r">
            <skinnedMesh name="elbow_rmesh001" geometry={nodes.elbow_rmesh001.geometry} material={materials['hand r']} skeleton={nodes.elbow_rmesh001.skeleton} />
            <skinnedMesh name="elbow_rmesh001_1" geometry={nodes.elbow_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.elbow_rmesh001_1.skeleton} />
          </group>
          <group name="leg_l">
            <skinnedMesh name="leg_lmesh001" geometry={nodes.leg_lmesh001.geometry} material={materials['l leg ']} skeleton={nodes.leg_lmesh001.skeleton} />
            <skinnedMesh name="leg_lmesh001_1" geometry={nodes.leg_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_lmesh001_1.skeleton} />
          </group>
          <group name="leg_mr_l">
            <skinnedMesh name="leg_mr_lmesh001" geometry={nodes.leg_mr_lmesh001.geometry} material={materials['lleg big']} skeleton={nodes.leg_mr_lmesh001.skeleton} />
            <skinnedMesh name="leg_mr_lmesh001_1" geometry={nodes.leg_mr_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_mr_lmesh001_1.skeleton} />
          </group>
          <group name="leg_mr_r">
            <skinnedMesh name="leg_mr_rmesh001" geometry={nodes.leg_mr_rmesh001.geometry} material={materials['r leg big']} skeleton={nodes.leg_mr_rmesh001.skeleton} />
            <skinnedMesh name="leg_mr_rmesh001_1" geometry={nodes.leg_mr_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_mr_rmesh001_1.skeleton} />
          </group>
          <group name="leg_r">
            <skinnedMesh name="leg_rmesh001" geometry={nodes.leg_rmesh001.geometry} material={materials['r leg ']} skeleton={nodes.leg_rmesh001.skeleton} />
            <skinnedMesh name="leg_rmesh001_1" geometry={nodes.leg_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_rmesh001_1.skeleton} />
          </group>
          <group name="leg_side_l">
            <skinnedMesh name="leg_side_lmesh001" geometry={nodes.leg_side_lmesh001.geometry} material={materials['l leg samll']} skeleton={nodes.leg_side_lmesh001.skeleton} />
            <skinnedMesh name="leg_side_lmesh001_1" geometry={nodes.leg_side_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_side_lmesh001_1.skeleton} />
          </group>
          <group name="leg_side_r">
            <skinnedMesh name="leg_side_rmesh001" geometry={nodes.leg_side_rmesh001.geometry} material={materials['l leg samll']} skeleton={nodes.leg_side_rmesh001.skeleton} />
            <skinnedMesh name="leg_side_rmesh001_1" geometry={nodes.leg_side_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.leg_side_rmesh001_1.skeleton} />
          </group>
          <skinnedMesh name="pant" geometry={nodes.pant.geometry} material={materials.pant} skeleton={nodes.pant.skeleton} />
          <skinnedMesh name="shirt" geometry={nodes.shirt.geometry} material={materials.shirt} skeleton={nodes.shirt.skeleton} />
          <group name="sholdel_r">
            <skinnedMesh name="sholdel_rmesh001" geometry={nodes.sholdel_rmesh001.geometry} material={materials['sholder r']} skeleton={nodes.sholdel_rmesh001.skeleton} />
            <skinnedMesh name="sholdel_rmesh001_1" geometry={nodes.sholdel_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.sholdel_rmesh001_1.skeleton} />
          </group>
          <group name="sholder_guard_">
            <skinnedMesh name="sholder_guard_mesh001" geometry={nodes.sholder_guard_mesh001.geometry} material={materials['solder plates']} skeleton={nodes.sholder_guard_mesh001.skeleton} />
            <skinnedMesh name="sholder_guard_mesh001_1" geometry={nodes.sholder_guard_mesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.sholder_guard_mesh001_1.skeleton} />
          </group>
          <group name="sholder_l">
            <skinnedMesh name="sholder_lmesh001" geometry={nodes.sholder_lmesh001.geometry} material={materials['sholder r']} skeleton={nodes.sholder_lmesh001.skeleton} />
            <skinnedMesh name="sholder_lmesh001_1" geometry={nodes.sholder_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.sholder_lmesh001_1.skeleton} />
          </group>
          <group name="thie_l">
            <skinnedMesh name="thie_lmesh001" geometry={nodes.thie_lmesh001.geometry} material={materials['thie l']} skeleton={nodes.thie_lmesh001.skeleton} />
            <skinnedMesh name="thie_lmesh001_1" geometry={nodes.thie_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.thie_lmesh001_1.skeleton} />
          </group>
          <group name="thie_r">
            <skinnedMesh name="thie_rmesh001" geometry={nodes.thie_rmesh001.geometry} material={materials['thie r']} skeleton={nodes.thie_rmesh001.skeleton} />
            <skinnedMesh name="thie_rmesh001_1" geometry={nodes.thie_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.thie_rmesh001_1.skeleton} />
          </group>
          <group name="Wolf3D_Outfit_Bottom001_Baked">
            <skinnedMesh name="Wolf3D_Outfit_Bottom001_Bakedmesh001" geometry={nodes.Wolf3D_Outfit_Bottom001_Bakedmesh001.geometry} material={materials['briefs ']} skeleton={nodes.Wolf3D_Outfit_Bottom001_Bakedmesh001.skeleton} />
            <skinnedMesh name="Wolf3D_Outfit_Bottom001_Bakedmesh001_1" geometry={nodes.Wolf3D_Outfit_Bottom001_Bakedmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.Wolf3D_Outfit_Bottom001_Bakedmesh001_1.skeleton} />
          </group>
          <skinnedMesh name="Wolf3D_Outfit_Bottom001_Baked002" geometry={nodes.Wolf3D_Outfit_Bottom001_Baked002.geometry} material={materials['backed energy waves']} skeleton={nodes.Wolf3D_Outfit_Bottom001_Baked002.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Bottom001_Baked003" geometry={nodes.Wolf3D_Outfit_Bottom001_Baked003.geometry} material={materials['backed energy waves']} skeleton={nodes.Wolf3D_Outfit_Bottom001_Baked003.skeleton} />
          <skinnedMesh name="Wolf3D_Outfit_Top007_Baked" geometry={nodes.Wolf3D_Outfit_Top007_Baked.geometry} material={materials['backed energy waves']} skeleton={nodes.Wolf3D_Outfit_Top007_Baked.skeleton} />
          <group name="wrist_l">
            <skinnedMesh name="wrist_lmesh001" geometry={nodes.wrist_lmesh001.geometry} material={materials['wrist l']} skeleton={nodes.wrist_lmesh001.skeleton} />
            <skinnedMesh name="wrist_lmesh001_1" geometry={nodes.wrist_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.wrist_lmesh001_1.skeleton} />
          </group>
          <group name="wrist_pale_l">
            <skinnedMesh name="wrist_pale_lmesh001" geometry={nodes.wrist_pale_lmesh001.geometry} material={materials['arm r']} skeleton={nodes.wrist_pale_lmesh001.skeleton} />
            <skinnedMesh name="wrist_pale_lmesh001_1" geometry={nodes.wrist_pale_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.wrist_pale_lmesh001_1.skeleton} />
          </group>
          <group name="wrist_plate_l">
            <skinnedMesh name="wrist_plate_lmesh001" geometry={nodes.wrist_plate_lmesh001.geometry} material={materials['arm l']} skeleton={nodes.wrist_plate_lmesh001.skeleton} />
            <skinnedMesh name="wrist_plate_lmesh001_1" geometry={nodes.wrist_plate_lmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.wrist_plate_lmesh001_1.skeleton} />
          </group>
          <group name="wrist_r">
            <skinnedMesh name="wrist_rmesh001" geometry={nodes.wrist_rmesh001.geometry} material={materials['wrist l']} skeleton={nodes.wrist_rmesh001.skeleton} />
            <skinnedMesh name="wrist_rmesh001_1" geometry={nodes.wrist_rmesh001_1.geometry} material={materials['backed energy waves']} skeleton={nodes.wrist_rmesh001_1.skeleton} />
          </group>
          <skinnedMesh name="EyeLeftmesh001" geometry={nodes.EyeLeftmesh001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeftmesh001.skeleton} morphTargetDictionary={nodes.EyeLeftmesh001.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeftmesh001.morphTargetInfluences} />
          <skinnedMesh name="EyeRightmesh001" geometry={nodes.EyeRightmesh001.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRightmesh001.skeleton} morphTargetDictionary={nodes.EyeRightmesh001.morphTargetDictionary} morphTargetInfluences={nodes.EyeRightmesh001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Hairmesh002" geometry={nodes.Wolf3D_Hairmesh002.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hairmesh002.skeleton} morphTargetDictionary={nodes.Wolf3D_Hairmesh002.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Hairmesh002.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Headmesh001" geometry={nodes.Wolf3D_Headmesh001.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Headmesh001.skeleton} morphTargetDictionary={nodes.Wolf3D_Headmesh001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Headmesh001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth001mesh001" geometry={nodes.Wolf3D_Teeth001mesh001.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth001mesh001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth001mesh001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth001mesh001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth002mesh001" geometry={nodes.Wolf3D_Teeth002mesh001.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth002mesh001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth002mesh001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth002mesh001.morphTargetInfluences} />
          <skinnedMesh name="Wolf3D_Teeth003mesh001" geometry={nodes.Wolf3D_Teeth003mesh001.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth003mesh001.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth003mesh001.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth003mesh001.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Avatar.gltf')
















