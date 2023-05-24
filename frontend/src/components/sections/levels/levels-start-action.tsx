import { cn } from '@/lib/utils'
import { Icons } from '@/components/ui/icons'
import { useLevelMessage } from '@/app/hooks/use-level'
import { IGameLevel } from '@/app/types/game'

type LevelsStartActionProps = BaseComponentProps & {
  level: IGameLevel
}

export function LevelsStartAction({
  className,
  level,
}: LevelsStartActionProps) {
  const { isPending, onStart } = useLevelMessage()

  return (
    <div className="pl-36 mt-12">
      <button
        className={cn(
          'btn space-x-2.5',
          className,
          isPending && 'btn--loading'
        )}
        disabled={isPending}
        onClick={() => onStart(level)}
      >
        <Icons.gameJoystick className="w-5 h-5" />
        <span>Start game</span>
      </button>
    </div>
  )
}
