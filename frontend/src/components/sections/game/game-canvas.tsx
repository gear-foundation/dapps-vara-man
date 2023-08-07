import React, { useContext, useEffect, useRef, useState } from 'react';
import { GameContext } from '@/app/context/ctx-game-score.js';
import { useLevelMessage } from '@/app/hooks/use-level';
import GameEngine from './core/GameEngine';

import style from './game.module.scss';
import { LevelsSelectMode } from '../levels/levels-select-mode';


const GameCore = () => {
    const { onClaimReward } = useLevelMessage()

    const { incrementCoins, decrementLives, lives, silverCoins, goldCoins } = useContext(GameContext);
    const canvasRef = useRef(null);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const gameActions = {
            incrementCoins,
            decrementLives,
        };

        if (canvas) {
            const gameEngine = new GameEngine(canvas, gameActions);

            if (lives !== 0 && !gameOver) {
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
            } else {
                gameEngine.destroy();
            }
        }

    }, [gameOver]);

    useEffect(() => {
        if (lives === 0) {
            setGameOver(true);
            onClaimReward(silverCoins, goldCoins)
        }
    }, [lives]);

    return (
        <>
            {gameOver ? (
                <LevelsSelectMode />
            ) : (
                <div className={style.canvas}>
                    <canvas ref={canvasRef} id="gameCanvas" />
                </div>
            )}
        </>
    );
};

export default GameCore;
