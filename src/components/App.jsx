import fastviewImage from '../assets/firstview.png'
import mainLine from '../assets/mainline.png'
import moreImage from '../assets/more.png'
import arrowImage from '../assets/arrow.png'
import categoryline from '../assets/categoryline.png'
import worksImage1 from '../assets/work/work1.png'
import worksImage2 from '../assets/work/work2.png'
import worksImage3 from '../assets/work/work3.png'
import worksImage4 from '../assets/work/work4.png'
import skillImage1 from '../assets/skill/skill1.png'
import skillImage2 from '../assets/skill/skill2.png'
import aboutImage from '../assets/aboutimage.png'
import '../style/index.css'
import '../style/App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import React, { useState } from "react";
import { motion } from "motion/react";
import { Canvas } from '@react-three/fiber'
import Cube from './Cube'
import { OrthographicCamera } from '@react-three/drei'

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

function App() {
  return (
    <>
    <Header />
    <div className="main">
      <div className="main-firstview">
        <div className="main-firstview-3d">
        {/* 透視投影　カメラ位置（右上前） */}
        {/* <Canvas camera={{ position: [3, 3, 3], fov: 75 }}>
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <Cube />
        </Canvas> */}
        
        {/* 平行投影　カメラ位置（右上前） */}
        <Canvas
          onPointerDown={(e) => { /* マウスクリック、指のタッチイベント発生 */
            // Canvas要素を取得
            const canvas = e.target //クリックされたCanvas要素を取得
            const rect = canvas.getBoundingClientRect() //要素サイズ、表示領域に対する相対的な位置情報を返す
            
            // クリック位置をCanvas内の相対座標に変換 x:横軸 y:縦軸
            const x = e.clientX - rect.left //横軸　クリックした位置から要素の左端までの距離
            const y = e.clientY - rect.top //縦軸　クリックした位置から要素の上端までの距離
            
            // Canvasのサイズ
            const width = rect.width //横軸　要素の幅
            const height = rect.height //縦軸　要素の高さ
            
            // 判定: 上を最優先（上から1/3の範囲）
            if (y < height / 3) { //縦軸が1/3より小さい場合
              // 上: Works
              const el = document.querySelector('#works') //Worksセクションを取得
              if (el) el.scrollIntoView({ behavior: 'smooth' }) //Worksセクションにスクロール
            } else {
              // 左右判定
              if (x < width / 2) { //横軸が1/2より小さい場合
                // 左: About
                const el = document.querySelector('#about') //Aboutセクションを取得
                if (el) el.scrollIntoView({ behavior: 'smooth' }) //Aboutセクションにスクロール
              } else {
                // 右: Skill
                const el = document.querySelector('#skill') //Skillセクションを取得
                if (el) el.scrollIntoView({ behavior: 'smooth' }) //Skillセクションにスクロール
              }
            }
          }}
          style={{ cursor: 'pointer' }}
        >
        <OrthographicCamera
          makeDefault
          position={[2.5, 1.5, 3]} // カメラ位置（右上前）x,y,z
          rotation={[-Math.PI / 7, Math.PI / 5, 0]} // ← ここで回転を追加！
          zoom={65} // 倍率
        />
          <ambientLight intensity={2} />  {/* 環境光 */}
          <directionalLight position={[4, 4, 4]}  
          intensity={4} castShadow/> {/* 平行光源　intensity: 明るさ　castShadow: 影を投射 */}
          <Cube /> {/* 立方体 */}
        </Canvas>
        </div>
        <p>「そして、<br />思いを包む箱を作る。」</p>
      </div>
    
      <div className="main-about-line">
        <img src={mainLine} className="main-about-line-image" alt="about-line-image" />
      </div>
      <div className="main-about">
        <p className="main-about-title">私にとってのデザインとは</p>
        <p className="main-about-text">デザインとは、思いを形にすることだと思います。
          相手の気持ちや背景を理解し、何を伝えたいのかを考える。
          そして、それを最も心地よく伝えられる“形”にすること。
          見た目の美しさだけでなく、使う人の体験や流れを設計する。
          デザインは、誰かの想いと誰かの行動をつなぐ「橋」のような存在です。
          その橋を、私は構造（Code）と感性（Design）の両面から支えたい。一人の力ではなく、誰かの力と交わりながら、チームで届ける箱（The Box）を一緒に形にしていきたいと考えております。
        </p>
      </div>
    </div>

      <div className="works" id="works">
        <div className="categoryline">
          <img src={categoryline} className="categoryline-image" alt="categoryline-image" />
          <p>Works</p>
        </div>
        <div className="works-list">
          <div className="works-list-item-container">
            <div className="works-list-item">
              <img src={worksImage4} className="works-list-item-image" alt="works-list-item-image" />
              <p className="works-list-item-tag">#LP #自主制作</p>
              <p className="works-list-item-title">シャンプーLP</p>
              <p className="works-list-item-text">タグ</p>
            </div>
            <div className="works-list-item">
              <img src={worksImage3} className="works-list-item-image" alt="works-list-item-image" />
              <p className="works-list-item-tag">#LP #自主制作</p>
              <p className="works-list-item-title">シャンプーLP</p>
              <p className="works-list-item-text">タグ</p>
            </div>
          </div>
          <div className="works-list-item-container">
            <div className="works-list-item">
              <img src={worksImage1} className="works-list-item-image" alt="works-list-item-image" />
              <p className="works-list-item-tag">#LP #自主制作</p>
              <p className="works-list-item-title">シャンプーLP</p>
              <p className="works-list-item-text">タグ</p>
            </div>
            <div className="works-list-item">
              <img src={worksImage2} className="works-list-item-image" alt="works-list-item-image" />
              <p className="works-list-item-tag">#LP #自主制作</p>
              <p className="works-list-item-title">シャンプーLP</p>
              <p className="works-list-item-text">タグ</p>
            </div>
          </div>
        </div>
      </div>

      <div className="more-works">
        <img src={moreImage} className="more-works-image" alt="more" />
      </div>

      <div className="skill" id="skill">
        <div className="categoryline">
            <img src={categoryline} className="categoryline-image" alt="categoryline-image" />
            <p>Skill</p>
        </div>
        <div className="skill-list">
          <div className="skill-list-item-container">
            <div className="skill-list-item">
              <img
                src={skillImage1} className="skill-list-item-image" alt="skill-list-item-image"/>
              <p className="skill-list-item-title">Design</p>
              <p className="skill-list-item-text">
                UI/UXを意識したWebサイトやLPのデザインを行います。
                ユーザーの行動や感情の流れを丁寧に設計し、目的達成のための導線をデザインします。
                また、システム開発の経験を活かし、デザインだけでなく
                “仕組みとして機能する設計”を意識しています。
              </p>
            </div>
            <div className="skill-list-item">
              <img src={skillImage2} className="skill-list-item-image" alt="skill-list-item-image"/>
              <p className="skill-list-item-title">Cording</p>
              <p className="skill-list-item-text">
                HTML・CSS・JavaScriptを用いて、デザインの意図を正確に再現します。
                UIの美しさだけでなく、社内SEの経験を活かし、
                保守性・効率性を考慮した構築や、誰が見ても理解しやすいコード設計を心がけています。
                動きのあるインタラクションや自動化の仕組みづくりにも対応します。
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="about" id="about">
        <div className="categoryline">
          <img src={categoryline} className="categoryline-image" alt="categoryline-image" />
          <p>About</p>
        </div>
        <div className="about-container">
          <div className="about-name">
            <div className="about-name-en">
              <p>Kawamata Yuto</p>
            </div>
            <div className="about-name-jp">
              <p>かわまた　ゆうと</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-image">
              <img src={aboutImage} className="about-image" alt="about-image" />
            </div>
            <div className="about-text">
              <p>前職では病院で社内SEとして勤務していました。
                多職種の方々とコミュニケーションを取りながら、要望を正確に理解し、
                課題を形にする力を培ってきました。商品や企業の魅力を情報から整理し、
                視覚的に伝えられるWebデザインに惹かれ、スクールに入学。
                現在は、デザインとコーディングの両面から人の思いを届ける仕事を目指しています。</p>
            </div>
          </div>

        </div>
      </div>

      <div className="more-about">
            <img src={moreImage} className="more-about-image" alt="more" />
      </div>
      
      <div className="contact" id="contact">
        <div className="categoryline">
          <img src={categoryline} className="categoryline-image" alt="categoryline-image" />
          <p>Contact</p>
        </div>
        <div className="contact-container">
          <div className="contact-button">
            <motion.button whileHover={{ scale: 1.1 }} href="mailto:y.kwmt16223@gmail.com" target="_blank">お問い合わせはこちらから</motion.button>
            <img src={arrowImage} alt="arrow" />
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default App
