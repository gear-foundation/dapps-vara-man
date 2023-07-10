import { GameNav } from '@/components/sections/game/game-nav'
import { GameField } from '@/components/sections/game/game-field'

type GameInitProps = {}

export function GameInit({}: GameInitProps) {
  return (
    <div>
      <GameNav />
      <GameField />
    </div>
  )
}
