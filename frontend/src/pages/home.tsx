import { HomeRegister } from '@/components/sections/home/home-register'
import { useGame } from '@/app/context/ctx-game'
import { LevelsSelectMode } from '@/components/sections/levels/levels-select-mode'
import { GameInit } from '@/components/sections/game/game-init'
import { useLevelMessage } from '@/app/hooks/use-level'

export default function Home() {
  const { player, game } = useGame()
  const { isPending } = useLevelMessage()

  const findGamePlayer = player && game && game.games.find((x: any) => x[0] === player[0])


  return (
    <>
      {!player?.length ? (
        <HomeRegister />
      ) : (
        <>
          {!findGamePlayer || isPending ? <LevelsSelectMode /> : <GameInit />}
        </>
      )}
    </>
  )
}
