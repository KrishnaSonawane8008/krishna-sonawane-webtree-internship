import {Canvas} from "@react-three/fiber"
import './App.css'
import {OrbitControls} from "@react-three/drei"
import Soilder from "./Soilder.jsx"




function App() {

  return (
    <Canvas shadows camera={ {position: [3,3,-3]} } >

      <directionalLight position={ [1,2,-2] }  castShadow/>
      <ambientLight/>
      <Soilder position={[1.5,0,0]} animation_Type={"Idle"}/>
      <Soilder position={[0,0,0]} animation_Type={"Run"}/>
      <Soilder position={[-1.5,0,0]} animation_Type={"Walk"}/>

      <mesh position={[0,-0.05,0.0]} receiveShadow>
        <boxGeometry args={[10,0.1,10]}/>
        <meshStandardMaterial color={"white"}/>
      </mesh>
      <OrbitControls dampingFactor={1.5} />

    </Canvas>
  )
}

export default App
