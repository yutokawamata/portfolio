import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.png'
import menu from '../assets/menu.png'
import HumburgerMenu from './HumburgerMenu.jsx'
import '../style/header.css'

function Header() {
  // ハンバーガーメニューの状態を管理 スクロールしたら縮小開始の状態を管理
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    // handleScroll()関数を定義
    const handleScroll = () => {
      // スクロール位置を取得
      const scrollPosition = window.scrollY
      // 50pxスクロールしたら縮小開始
      setIsScrolled(scrollPosition > 50)
    }

    // スクロールするたびにhandleScloll()実行　イベントを実行
    window.addEventListener('scroll', handleScroll)
    // アンマウント時実行　解除 無限実行防止
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}> {/* スクロールしたら縮小開始 */}
      <a href="https://www.google.com" target="_blank"> {/* ロゴをクリックしたら新しいタブで開く */}
        <img src={logo} className="header-logo" alt="logo" /> {/* ロゴ画像を表示 */}
      </a>
      <HumburgerMenu /> {/* ハンバーガーメニューを表示 */}
    </div>
  )
}

export default Header
