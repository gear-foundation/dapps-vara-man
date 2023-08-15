import React, { createContext, useState, useEffect } from 'react';
import { useGame } from './ctx-game';

export interface GameContextProps {
    silverCoins: number;
    goldCoins: number;
    incrementCoins: (coinType: 'silver' | 'gold') => void;
    lives: number;
    timer: number;
}

interface GameProviderProps {
    children: React.ReactNode;
}

const gameTimer = 60 * 10

export const GameContext = createContext<GameContextProps>({
    silverCoins: 0,
    goldCoins: 0,
    incrementCoins: () => { },
    lives: 3,
    timer: gameTimer
});

export const GameProviderScore = ({ children }: GameProviderProps) => {
    const { player } = useGame();
    const retries = player ? Number(player[1].retries) : 0;

    const [silverCoins, setSilverCoins] = useState(0);
    const [goldCoins, setGoldCoins] = useState(0);
    const [lives, setLives] = useState(3);
    const [timer, setTimer] = useState(gameTimer);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const retriesToLivesMap: Record<string, number> = {
            "1": 3,
            "2": 2,
            "3": 1,
        };

        if (retriesToLivesMap[retries]) {
            setLives(retriesToLivesMap[retries]);
        }
    }, [retries]);

    const incrementCoins = (coinType: 'silver' | 'gold') => {
        if (coinType === 'silver') {
            setSilverCoins(prevCoins => prevCoins + 1);
        } else if (coinType === 'gold') {
            setGoldCoins((prevCoins) => prevCoins + 1);
        }
    };

    return (
        <GameContext.Provider
            value={{ silverCoins, goldCoins, incrementCoins, lives, timer }}
        >
            {children}
        </GameContext.Provider>
    );
};
