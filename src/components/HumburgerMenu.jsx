import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import "../style/HumbergerMenu.css";

function HumburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // toggleMenu()関数を定義
    const toggleMenu = () => {
        // isOpenの状態を反転
        setIsOpen(!isOpen);
    };

    return (
        <div className="hamburger-container">
            {/* ハンバーガーボタン */}
            <motion.button 
                className="humburger-button"
                onClick={toggleMenu}
                aria-label="メニュー"
            >
                {/* ハンバーガーボタンの線（上） */}
                <motion.span 
                    className="hamburger-line"
                    animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
                {/* ハンバーガーボタンの線（中） */}
                <motion.span 
                    className="hamburger-line"
                    animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
                {/* ハンバーガーボタンの線（下） */}
                <motion.span 
                    className="hamburger-line"
                    animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>
            <AnimatePresence> {/* アニメーションを管理 */}
                {isOpen && (
                    <>
                        {/* ハンバーガーメニューの背景 */}
                        <motion.div
                            className="hamburger-overlay"
                            initial={{ opacity: 0 }} // 初期状態は透明
                            animate={{ opacity: 1 }} //アニメーション中は不透明
                            exit={{ opacity: 0 }} // アニメーション終了後は透明
                            transition={{ duration: 0.3 }} // アニメーション時間
                            onClick={toggleMenu} // ハンバーガーメニューの背景をクリックしたらハンバーガーメニューを閉じる
                        />
                        {/* ハンバーガーメニューのリスト */}
                        <motion.nav
                            className="hamburger-menu"
                            initial={{ opacity: 0, x: 100 }} // 初期状態は透明かつ右に100px移動
                            animate={{ opacity: 1, x: 0 }} // アニメーション中は不透明かつ左に0px移動
                            exit={{ opacity: 0, x: 100 }} // アニメーション終了後は透明かつ右に100px移動
                            transition={{ duration: 0.3 }} // アニメーション時間
                        >
                            <ul className="hamburger-menu-list">
                                <li><a href="#works" onClick={toggleMenu}>Works</a></li>
                                <li><a href="#skill" onClick={toggleMenu}>Skill</a></li>
                                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                            </ul>
                        </motion.nav>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}

export default HumburgerMenu;