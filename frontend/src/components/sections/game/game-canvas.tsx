import React, { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '@/app/context/ctx-game-score.js';
import GameEngine from './core/GameEngine';

import GameModal from './game-modal';

import style from './game.module.scss';


const GameCore = () => {
    const { incrementCoins, lives, } = useContext(GameContext);
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);
    const [isOpenModal, setOpenModal] = useState(false)

    useEffect(() => {
        const canvas = canvasRef.current;
        const gameActions = {
            incrementCoins,
            setGameOver
        };

        if (canvas && lives !== 0 && !gameOver) {
            const gameEngine = new GameEngine(canvas, gameActions);

            const animate = () => {
                gameEngine.animate();
            };

            gameEngine.setCanvasSize();
            const animationId = requestAnimationFrame(animate);

            return () => {
                cancelAnimationFrame(animationId);
            };
        }

        if (gameOver) {
            setOpenModal(true)
        }

    }, [gameOver]);


    useEffect(() => {
        const handleKeyDown = (event: any) => {
            const keysToPreventScroll = [37, 38, 39, 40]; // Arrow keys
            if (keysToPreventScroll.includes(event.keyCode)) {
                event.preventDefault();
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    return (
        <>
            <div className={style.canvas}>
                {isOpenModal && <GameModal setOpenModal={setOpenModal} />}
                <canvas ref={canvasRef} id="gameCanvas" />
            </div>
        </>
    );
};

export default GameCore;
