import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}models/cube1.glb`)
  const modelRef = useRef()

  // ウィンドウサイズに応じてオブジェクトサイズを設定する関数
  const updateScale = () => {
    if (!modelRef.current) return

    const width = window.innerWidth
    
    // 条件を小さい方から大きい方へ順序立てる
    if (width < 540) {
      // 540px以下: サイズ5
      modelRef.current.scale.set(10, 10, 10)
    } else if (width < 740) {
      // 740px以下（540px超）: サイズ10
      modelRef.current.scale.set(13, 13, 13)
    } else {
      // 740px超: デフォルトサイズ20
      modelRef.current.scale.set(20, 20, 20)
    }
    
    // 位置も設定
    modelRef.current.position.y = 0
  }

  // オブジェクトが読み込まれた後に初期サイズを設定
  useEffect(() => {
    if (modelRef.current && scene) {
      // 初期表示時のサイズを設定
      updateScale()
    }
  }, [scene])

  // ウィンドウサイズ変更時にオブジェクトサイズを変更
  useEffect(() => {
    const handleResize = () => {
      updateScale()
    }

    // リサイズイベントリスナーを追加
    window.addEventListener('resize', handleResize)

    // クリーンアップ: コンポーネントアンマウント時にイベントリスナーを削除
    return () => {
      window.removeEventListener('resize', handleResize)
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
