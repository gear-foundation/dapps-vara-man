import { useContext, useEffect, useRef } from 'react';
import style from './game.module.scss';
import { GameContext } from '@/app/context/ctx-game-score.js';
import GameEngine from './GameEngine';

const tileSize = 32;
const velocity = 2;

const GameCore = () => {
    const { incrementCoins, decrementLives, lives } = useContext(GameContext);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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



        animate();

        requestAnimationFrame(animate);
    }, []);

    return (
        <div className={style.canvas}>
            <canvas ref={canvasRef} id="gameCanvas" height={700} />
        </div>
    );
};

export default GameCore;
