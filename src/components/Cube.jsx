import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const { scene } = useGLTF('/models/cube1.glb')
  const modelRef = useRef()

  // オブジェクトのサイズと位置を設定
  useEffect(() => {
    // オブジェクトが存在する場合
    if (modelRef.current) {
      modelRef.current.scale.set(20, 20, 20) // オブジェクトのサイズを設定
      modelRef.current.position.y = 0 // オブジェクトの位置を設定
    }
  }, [])

  // 浮遊アニメーション（上下のみ、回転なし）
  useFrame(({ clock }) => { // アニメーションを実行するための関数
    const t = clock.getElapsedTime() // 経過時間を取得
    if (modelRef.current) { // オブジェクトが存在する場合
      modelRef.current.position.y = Math.sin(t) * 0.3 // オブジェクトの位置を設定
    }
  })

  return (
    <primitive 
      ref={modelRef} // オブジェクトを参照
      object={scene} // オブジェクトを設定
    />
  )
}

export default Cube
