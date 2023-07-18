import React, { createContext, useState } from 'react';

export interface GameContextProps {
    eatenCoins: number;
    incrementCoins: () => void;
}

interface GameProviderProps {
    children: React.ReactNode
}

export const GameContext = createContext<GameContextProps>({
    eatenCoins: 0,
    incrementCoins: () => { },
});

export const GameProviderScore = ({ children }: GameProviderProps) => {
    const [eatenCoins, setEatenCoins] = useState(0);

    const incrementCoins = () => {
        setEatenCoins((prevCoins) => prevCoins + 1);
    };

    return (
        <GameContext.Provider value={{ eatenCoins, incrementCoins }}>
            {children}
        </GameContext.Provider>
    );
};
