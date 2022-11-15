import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './components/three'

function App() {
  return (
    <Canvas id='museum-canvas'>
      <Suspense fallback={null}>
        <Three></Three>
      </Suspense>
    </Canvas>
  );
}

export default App;
