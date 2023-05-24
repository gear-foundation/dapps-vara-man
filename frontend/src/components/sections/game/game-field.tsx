import { useEffect } from 'react'
import { createGameField } from '@/components/sections/game/game-pacman'
import { sleep } from '@/lib/utils'

type GameFieldProps = BaseComponentProps & {}

export function GameField({ children }: GameFieldProps) {
  useEffect(() => {
    // sleep(1).then(() => createGameField())
  }, [])

  return (
    <div>
      <canvas id="canvas" width="500" height="500" />
      <div className="opacity-0">
        <img
          id="animation"
          src="/images/game/animations.gif"
          width="140"
          height="20"
          alt=""
          loading="lazy"
        />
        <img
          id="ghosts"
          src="/images/game/ghost.png"
          width="300"
          height="236"
          alt=""
          loading="lazy"
        />
      </div>
    </div>
  )
}
