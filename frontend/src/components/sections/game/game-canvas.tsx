import React, { useContext, useEffect, useRef, useState } from 'react';
import style from './game.module.scss';
import { GameContext } from '@/app/context/ctx-game-score.js';
import GameEngine from './core/GameEngine';

const GameCore = () => {
    const { incrementCoins, decrementLives, lives, silverCoins, goldCoins } = useContext(GameContext);
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gameActions = {
            incrementCoins,
            decrementLives,
        };

        const gameEngine = new GameEngine(canvas, gameActions);

        if (lives !== 0) {
            const animate = () => {
                gameEngine.animate();
                if (gameOver) {
                    return;
                }
            };

            gameEngine.setCanvasSize();
            requestAnimationFrame(animate);

            // Prevent page scrolling on arrow key press
            const handleKeyDown = (event: any) => {
                const keysToPreventScroll = [37, 38, 39, 40]; // Arrow keys
                if (keysToPreventScroll.includes(event.keyCode)) {
                    event.preventDefault();
                }
            };

            // Attach the event listener for keydown
            document.addEventListener('keydown', handleKeyDown);

            return () => {
                gameEngine.destroy();
                document.removeEventListener('keydown', handleKeyDown);
            };
        } else {
            gameEngine.destroy();
        }
    }, []);

    useEffect(() => {
        if (lives === 0) {
            setGameOver(true);
        }
    }, [lives]);

    return (
        <>
            {gameOver ? (
                <div>
                    Silver Coins: {silverCoins} Gold Coins: {goldCoins}
                </div>
            ) : (
                <div className={style.canvas}>
                    <canvas ref={canvasRef} id="gameCanvas" />
                </div>
            )}
        </>
    );
};

export default GameCore;
