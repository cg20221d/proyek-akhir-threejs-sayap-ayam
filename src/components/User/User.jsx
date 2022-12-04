import { useBox } from '@react-three/cannon'
import React from 'react'
import { useRef, useState } from 'react'
import { useControls } from './useControls'

const User = ({position, setUsrX, setUsrZ}) => {
  useControls(position[0], position[2], setUsrX, setUsrZ)

  const width = 0.6
  const height = 1.75
  const front = 0.15

  const size = [width, height, front * 2]

  const [userBody, userApi] = useBox(
    () => ({
      args: [height, height, height],
      mass: 60,
      position,
    }),
    useRef(null)
  )

  return (
    <mesh ref={userBody} castShadow>
        <meshPhongMaterial color={0xffff00}/>
        <boxGeometry args={size}/>
    </mesh>
  )
}

export default User