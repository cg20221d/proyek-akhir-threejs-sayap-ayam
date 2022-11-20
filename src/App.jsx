import { Suspense, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './components/three'

function App() {
  return (
    <Canvas id='museum-canvas' shadows>
      <Suspense fallback={null}>
        <Three></Three>
      </Suspense>
    </Canvas>
  );
}

export default App;
