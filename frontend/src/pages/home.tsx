import { useState } from 'react'
import { HomeRegister } from '@/components/sections/home/home-register'
import { GameInit } from '@/components/sections/game/game-init'

export default function Home() {
  const [isInit, setIsInit] = useState(true)

  return <>{isInit ? <HomeRegister /> : <GameInit />}</>
}
