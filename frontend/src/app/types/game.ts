import { HexString } from '@polkadot/util/types'

export type IGameState = {
  admins: string[]
  games: IGameInstance[]
  players: IPlayer[]
  status: 'Paused' | 'Started'
  config: {
    tokensPerGoldCoin: number
    tokensPerSilverCoin: number
    easyRewardScaleBps: number
    mediumRewardScaleBps: number
    hardRewardScaleBps: number
    goldCoins: number
    silverCoins: number
  }
}

export type IPlayer = [HexString, IPlayerInfo]

export type IPlayerInfo = {
  name: string // Имя
  retries: string // Количество попыток(игр)
  claimedGoldCoins: number // Количество заработанных золотых монет
  claimedSilverCoins: number // Количество заработанных серебряных монет
}

type MAP_WIDTH = 17 // Количество ячеек на карте в длину
type MAP_HEIGHT = 12 // Количество ячеек на карте в ширину

export type IGameLevel = 'Easy' | 'Medium' | 'Hard'

export type IGameInstance = {
  level: IGameLevel // Уровень сложности
  playerAddress: HexString // Адрес игрока
  gold_coins: number // Количество золотых монет на карте
  silver_coins: number // Количество серебряных монет на карте
  start_time_ms: number // Время начала игры
  isClaimed: boolean // Флаг, который указывает на то, забрал ли игрок награду(клейм) или нет
  map: [[Entity, MAP_WIDTH], MAP_HEIGHT] // Карта в формате: [[Entity; MAP_WIDTH]; MAP_HEIGHT]
}

// Представляет сущность, которая может быть на карте (в ячейке)
type Entity =
  | 'Empty'
  | 'GoldCoin'
  | 'SilverCoin'
  | 'ZombieCat'
  | 'BatCat'
  | 'BullyCat'

// Специальный эффект
type Effect = 'Speed' | 'Slow' | 'Blind'
