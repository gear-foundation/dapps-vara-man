import React, { useContext, useEffect, useRef } from 'react';
import style from './game.module.scss';
import { GameContext } from '@/app/context/ctx-game-score.js';
import GameEngine from './GameEngine';

const tileSize = 32;
const velocity = 2;

const GameCore = () => {
    const { incrementCoins, decrementLives, lives, silverCoins, goldCoins } = useContext(GameContext);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gameActions = {
            incrementCoins,
            decrementLives,
        };

        const gameEngine = new GameEngine(canvas, tileSize, velocity, gameActions);

        const animate = () => {
            gameEngine.animate();
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
    }, []);

    return (
        <>
            {lives < 1 ? (
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
