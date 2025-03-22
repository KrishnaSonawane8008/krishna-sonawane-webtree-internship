import {Canvas} from "@react-three/fiber"
import './App.css'
import {OrbitControls} from "@react-three/drei"
import Soilder from "./Soilder.jsx"

function App() {

  return (
    <Canvas>
      <directionalLight position={ [1,2,-2] }  castShadow/>
      <ambientLight/>
      <mesh>
        <boxGeometry/>
        <meshBasicMaterial/>
      </mesh>
      <Soilder position={[1.5,0,0]}/>
      <OrbitControls dampingFactor={1.5} />
    </Canvas>
  )
}

export default App
