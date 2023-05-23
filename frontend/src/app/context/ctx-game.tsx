import { createContext, ReactNode, useContext, useState } from 'react'
import { IGameState } from '@/app/types/game'
// import { DominoTileType, GameWasmStateResponse, IGameState, IPlayer, PlayerChoiceType } from '../types/game';

const useGameData = () => {
  const [game, setGame] = useState<IGameState>()
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  // const [players, setPlayers] = useState<IPlayer[]>([]);

  return {
    game,
    setGame,
    isAdmin,
    setIsAdmin,
    // players,
    // setPlayers,
  }
}

export const GameCtx = createContext({} as ReturnType<typeof useGameData>)
export const useGame = () => useContext(GameCtx)

export function GameProvider({ children }: { children: ReactNode }) {
  const { Provider } = GameCtx
  return <Provider value={useGameData()}>{children}</Provider>
}
