import { useApp } from '@/app/context/ctx-app'
import { useGame } from '@/app/context/ctx-game'
import { useGameMessage } from '@/app/hooks/use-game'
import { IGameLevel } from '@/app/types/game'

export function useLevelMessage() {
  const { isPending, setIsPending } = useApp()
  const { player } = useGame()

  const handleMessage = useGameMessage()

  const onStart = (level: IGameLevel) => {
    if (player) {
      setIsPending(true)
      // const seed = Math.floor(Math.random() * 10 ** 10)
      const seed = 1
      handleMessage(
        {
          StartGame: {
            level,
            seed,
            player_address: player[0],
          },
        },
        {
          onSuccess: () => setIsPending(false),
          onError: () => setIsPending(false),
        }
      )
    }
  }

  const onClaimReward = (silver_coins: number, gold_coins: number) => {
    setIsPending(true)

    handleMessage(
      {
        ClaimReward: {
          silver_coins,
          gold_coins,
        },
      },
      {
        onSuccess: () => setIsPending(false),
        onError: () => setIsPending(false),
      }
    )
  }

  return { isPending, onStart, onClaimReward }
}
