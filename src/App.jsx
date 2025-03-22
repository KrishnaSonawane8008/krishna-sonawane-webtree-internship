import {Canvas} from "@react-three/fiber"
import './App.css'
import {OrbitControls} from "@react-three/drei"

function App() {

  return (
    <Canvas>
      <mesh>
        <boxGeometry/>
        <meshBasicMaterial/>
      </mesh>
      <OrbitControls dampingFactor={1.5} />
    </Canvas>
  )
}

export default App
