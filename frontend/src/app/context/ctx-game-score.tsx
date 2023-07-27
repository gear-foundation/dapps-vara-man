import React, { createContext, useState, useEffect } from 'react';

export interface GameContextProps {
    silverCoins: number;
    goldCoins: number;
    incrementCoins: (coinType: 'silver' | 'gold') => void;
    lives: number;
    decrementLives: () => void;
    timer: number;
}

interface GameProviderProps {
    children: React.ReactNode;
}

export const GameContext = createContext<GameContextProps>({
    silverCoins: 0,
    goldCoins: 0,
    incrementCoins: () => { },
    lives: 3,
    decrementLives: () => { },
    timer: 60 * 10
});

export const GameProviderScore = ({ children }: GameProviderProps) => {
    const [silverCoins, setSilverCoins] = useState(0);
    const [goldCoins, setGoldCoins] = useState(0);
    const [lives, setLives] = useState(3);
    const [timer, setTimer] = useState(60 * 10);

    const incrementCoins = (coinType: 'silver' | 'gold') => {
        if (coinType === 'silver') {
            setSilverCoins((prevCoins) => prevCoins + 1);
        } else if (coinType === 'gold') {
            setGoldCoins((prevCoins) => prevCoins + 1);
        }
    };

    const decrementLives = () => {
        setLives((prevLives) => prevLives - 1);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => Math.max(prevTimer - 1, 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (timer <= 0) {
            setLives(0);
        }
    }, [timer]);

    return (
        <GameContext.Provider
            value={{ silverCoins, goldCoins, incrementCoins, lives, decrementLives, timer }}
        >
            {children}
        </GameContext.Provider>
    );
};
