import { GameNav } from '@/components/sections/game/game-nav'
import { GameField } from '@/components/sections/game/game-field'
import GameCore from './core'

type GameInitProps = {}

export function GameInit({}: GameInitProps) {
  return (
    <div>
      <GameNav />
      <GameCore />
    </div>
  )
}
