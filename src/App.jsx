import {Canvas, useFrame} from "@react-three/fiber"
import './App.css'
import {useState, useEffect, useRef } from "react"
import {OrbitControls} from "@react-three/drei"
import Avatar from "./Avatar.jsx"
import { LoopOnce, Vector3 } from "three"




function App() {
  
  
  const [def, setDef]=useState( null )
  const [atk, setAtk]=useState( null )
  
  const [def_anim, setDefenceAnimation]=useState("defence_03")
  const [atk_anim, setAttackAnimation]=useState("attack_04")

  const [def_delay, setDefenceDelay]=useState(900)
  const [atk_delay, setAttackDelay]=useState(0)
  const [loop_time, setLoopTime]=useState(3000)

  const [attacker_pos, setAttackerPosition]=useState([0,0,14])
  const [defender_pos, setDefenderPosition]=useState([0,0,0])

  const [animation_reset, setAnimationRESET]=useState(false)

  const [status, setStatus]=useState("...Wait")
  function set_defence(self_ref){
    setDef( ()=>self_ref )
  }
  function set_attack(self_ref){
    setAtk( ()=>self_ref )
  }
  const Interval=useRef(null)
  const attackTimeout=useRef(null)
  const defenceTimeout=useRef(null)
  useEffect( ()=>{
    console.log("in useEffect")
    clearInterval(Interval.current)
    clearTimeout(defenceTimeout.current)
    clearTimeout(attackTimeout.current)
    if(def!=null && atk!=null){
      
      
      Interval.current=setInterval( ()=>{
        setStatus("Loop Started")
          def.stop()
          atk.stop()

          def.reset()
          atk.reset()
          
          def.clampWhenFinished=true
          atk.clampWhenFinished=true
          
          def.setLoop(LoopOnce, 0)
          atk.setLoop(LoopOnce, 0)

          defenceTimeout.current=setTimeout( ()=>{
            def.fadeIn(0.3).play()
          }, def_delay )

          attackTimeout.current=setTimeout( ()=>{
            atk.fadeIn(0.3).play()
          }, atk_delay )
          

      },loop_time )
    }

    return()=>{
      clearInterval(Interval.current)
      clearTimeout(defenceTimeout.current)
      clearTimeout(attackTimeout.current)
    }
  },[def, atk, animation_reset] )



  return (
    <>
    <Canvas shadows camera={ {position: [13,13,-13]} } >
      
      <directionalLight position={ [1,2,-2] }  castShadow/>
      <ambientLight/>
      

      <Avatar  pos={defender_pos}   pcallback={set_defence} animation={def_anim} rotation={[0,0,0]}/>
      <Avatar  pos={attacker_pos}  pcallback={set_attack} animation={atk_anim} rotation={[0,3.14159,0]}/>

      <mesh position={[0, 0.0,0.0]} rotation={[-1.5708,0,0]} receiveShadow>
        <planeGeometry args={[100,100]}/>
        <meshStandardMaterial color={"white"}/>
      </mesh>

      <OrbitControls dampingFactor={1.5} />

    </Canvas>
    <div className="controls">
      <button onClick={ ()=>{ 
        setDefenceAnimation( "defence_03" )
        setAttackAnimation( "attack_04" )
        setDefenceDelay(900)
        setAttackDelay(0)
        setLoopTime(3000)
        setAttackerPosition([0,0,14])
        setDefenderPosition([0,0,0])
        setAnimationRESET((val)=>!val)
        setStatus("...Wait")
        } }>D3-A4</button> 

      <button onClick={ ()=>{ 
        setDefenceAnimation( "defence_03" )
        setAttackAnimation( "attack_03" )
        setDefenceDelay(900)
        setAttackDelay(0)
        setLoopTime(4000)
        setAttackerPosition([0,0,20])
        setDefenderPosition([0,0,0])
        setAnimationRESET((val)=>!val)
        setStatus("...Wait")
        } }>D3-A3</button> 

      <button onClick={ ()=>{ 
        setDefenceAnimation( "defence_04" )
        setAttackAnimation( "attack_02" )
        setDefenceDelay(800)
        setAttackDelay(800)
        setLoopTime(3000)
        setAttackerPosition([-1,0,3.5])
        setDefenderPosition([0,0,0])   
        setAnimationRESET((val)=>!val)
        setStatus("...Wait")    
      } }>D4-A2</button> 

      <button onClick={ ()=>{ 
        setDefenceAnimation( "defence_02" )
        setAttackAnimation( "attack_01" )
        setDefenceDelay(200)
        setAttackDelay(0)
        setLoopTime(3000)
        setAttackerPosition([0,0,17])
        setDefenderPosition([4,0,0])
        setAnimationRESET((val)=>!val)
        setStatus("...Wait")
        } }>D2-A1</button> 
      
    </div>
    <div className="Status">
    <label>Status: {status}</label>
    </div>
    </>
  )
}

export default App
