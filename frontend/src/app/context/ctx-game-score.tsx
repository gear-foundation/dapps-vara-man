import React, { createContext, useState } from 'react';

export interface GameContextProps {
    silverCoins: number;
    goldCoins: number;
    incrementCoins: (coinType: 'silver' | 'gold') => void;
}

interface GameProviderProps {
    children: React.ReactNode;
}

export const GameContext = createContext<GameContextProps>({
    silverCoins: 0,
    goldCoins: 0,
    incrementCoins: () => { },
});

export const GameProviderScore = ({ children }: GameProviderProps) => {
    const [silverCoins, setSilverCoins] = useState(0);
    const [goldCoins, setGoldCoins] = useState(0);

    const incrementCoins = (coinType: 'silver' | 'gold') => {
        if (coinType === 'silver') {
            setSilverCoins((prevCoins) => prevCoins + 1);
        } else if (coinType === 'gold') {
            setGoldCoins((prevCoins) => prevCoins + 1);
        }
    };

    return (
        <GameContext.Provider value={{ silverCoins, goldCoins, incrementCoins }}>
            {children}
        </GameContext.Provider>
    );
};
