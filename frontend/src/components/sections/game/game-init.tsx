import { GameNav } from '@/components/sections/game/game-nav'
import { GameField } from '@/components/sections/game/game-field'

type GameInitProps = BaseComponentProps & {}

export function GameInit({ children }: GameInitProps) {
  return (
    <div>
      <GameNav />
      <GameField />
    </div>
  )
}
