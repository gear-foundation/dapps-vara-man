import { HomeRegister } from '@/components/sections/home/home-register'
import { useGame } from '@/app/context/ctx-game'
import { LevelsSelectMode } from '@/components/sections/levels/levels-select-mode'
import { GameInit } from '@/components/sections/game/game-init'

export default function Home() {
  const { player } = useGame()

  return (
    <>
      {/*<GameInit />*/}
      {!player?.length ? (
        <HomeRegister />
      ) : (
        <>
          <LevelsSelectMode />
          {/*<GameInit />*/}
        </>
      )}
    </>
  )
}
