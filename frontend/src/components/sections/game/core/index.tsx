import { useContext, useEffect, useRef, useState } from 'react';
import TileMap from './TileMap.js';
import style from './game.module.scss'
import { GameContext } from '@/app/context/ctx-game-score.js';

const tileSize = 32;
const velocity = 2;

const GameCore = () => {
    const { incrementCoins } = useContext(GameContext);

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const tileMapRef = useRef<TileMap | null>(null);
    const gameRef = useRef<any>(null);
    const enemiesRef = useRef<any[]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [gameWin, setGameWin] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        const tileMap = new TileMap(tileSize);
        const game = tileMap.getCharacter(velocity);
        const enemies = tileMap.getEnemies(velocity);

        tileMapRef.current = tileMap;
        gameRef.current = game;
        enemiesRef.current = enemies;


        const gameLoop = () => {
            if (tileMap && tileMap.isCoinEaten()) {
                console.log('incrementCoins')
                incrementCoins()
            }

            const canvas = canvasRef.current;
            const ctx = canvas!.getContext('2d');

            if (ctx) {
                ctx.imageSmoothingEnabled = false;

                const canvas = canvasRef.current;
                ctx.clearRect(0, 0, canvas!.width, canvas!.height);

                tileMap.draw(ctx);
                drawGameEnd();
                game!.draw(ctx, pause(), enemies);
                enemies.forEach((enemy: any) => enemy.draw(ctx, pause(), game));
                checkGameOver();
                checkGameWin();
            }
        };

        const checkGameWin = () => {
            if (!gameWin) {
                const didWin = tileMap.didWin();
                setGameWin(didWin);

            }
        };

        const checkGameOver = () => {
            if (!gameOver) {
                const isOver = isGameOver();
                setGameOver(isOver);

            }
        };

        const isGameOver = () => {
            return enemies.some(
                (enemy: any) => !game!.powerDotActive && enemy.collideWith(game)
            );
        };

        const pause = () => {
            return !game!.madeFirstMove || gameOver || gameWin;
        };

        const drawGameEnd = () => {
            if (gameOver || gameWin) {
                console.log('gameOver')
            }
        };

        canvas && tileMap.setCanvasSize(canvas);

        const animate = () => {
            gameLoop();
            if (!gameOver && !gameWin) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [gameOver, gameWin]);

    return (
        <div className={style.canvas}>
            <canvas ref={canvasRef} id="gameCanvas" height={700} />
        </div>
    )
};

export default GameCore;
