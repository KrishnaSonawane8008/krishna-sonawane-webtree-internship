import {Canvas, useLoader} from "@react-three/fiber"
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js'
import './App.css'
import {OrbitControls} from "@react-three/drei"
import Soilder from "./Soilder.jsx"

function Model(){
  const result=useLoader(GLTFLoader, 'src/assets/SoilderAssets/Soilder.gltf')
  return(
    <primitive object={result.scene} />
  )
}


function App() {

  return (
    <Canvas>
      <directionalLight position={ [1,2,-2] }  castShadow/>
      <ambientLight/>
      <mesh>
        <boxGeometry/>
        <meshStandardMaterial/>
      </mesh>
      {/* <Soilder position={[1.5,0,0]}/> */}
      <Model/>
      <OrbitControls dampingFactor={1.5} />
    </Canvas>
  )
}

export default App
