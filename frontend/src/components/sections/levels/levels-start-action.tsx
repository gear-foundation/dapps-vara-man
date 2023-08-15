import { useNavigate } from 'react-router-dom'
import { cn } from '@/app/utils'
import { Icons } from '@/components/ui/icons'
import { useLevelMessage } from '@/app/hooks/use-level'
import { IGameLevel } from '@/app/types/game'
import { useGame } from '@/app/context/ctx-game'

type LevelsStartActionProps = BaseComponentProps & {
  level: IGameLevel
}

export function LevelsStartAction({
  className,
  level,
}: LevelsStartActionProps) {
  const navigate = useNavigate();
  const { isPending, onStart } = useLevelMessage()
  const { player, game } = useGame()


  const onClickStart = () => {
    if (game && player) {
      const findGamePlayer = game.games.find((x: any) => x[0] === player[0])

      if (findGamePlayer) {
        return navigate('/game');
      }

      if (player[1].retries !== "3") {
        return onStart(level)
      }
    }
  }

  return (
    <div className="pl-36 mt-12">
      <button
        className={cn(
          'btn space-x-2.5',
          className,
          isPending && 'btn--loading'
        )}
        disabled={isPending || (player && player[1].retries === "3")}
        onClick={() => onClickStart()}
      >
        <Icons.gameJoystick className="w-5 h-5" />
        <span>Start game</span>
      </button>
    </div>
  )
}
