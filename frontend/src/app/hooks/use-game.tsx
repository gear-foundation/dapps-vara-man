import { useNavigate } from 'react-router-dom'
import {
  useAccount,
  useReadFullState,
  useSendMessage,
} from '@gear-js/react-hooks'
import { ENV } from '@/app/consts'
import { useMetadata } from '@/app/hooks/use-metadata'
import meta from '@/assets/meta/vara_man_game.meta.txt'
import { useApp } from '@/app/context/ctx-app'
import { useGame } from '@/app/context/ctx-game'
import { IGameState } from '@/app/types/game'
import { useEffect } from 'react'

export function useGameMessage() {
  const { metadata } = useMetadata(meta)
  return useSendMessage(ENV.GAME, metadata)
}

export function useReadGameState<T>() {
  const { metadata } = useMetadata(meta)
  return useReadFullState<T>(ENV.GAME, metadata)
}

export function useInitGame() {
  const navigate = useNavigate();
  const { setIsAllowed, setIsSettled } = useApp()
  const { account } = useAccount()
  const { game, setGame, setIsAdmin, setPlayer } = useGame()
  const { state } = useReadGameState<IGameState>()

  useEffect(() => {
    const findPlayer = game?.players.find(([address]) => address === account?.decodedAddress)

    setIsSettled(!!game)
    setIsAdmin(account?.decodedAddress === game?.config.operator)
    setPlayer(
      findPlayer
    )

    if (!findPlayer) {
      navigate('/');
    }
  }, [account, game])

  useEffect(() => {
    console.log('hello', state)
    setGame(state)
  }, [state, setGame])
}
