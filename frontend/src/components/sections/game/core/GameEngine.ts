import Character from './Character'
import Enemy from './Enemy'
import TileMap from './TileMap'

interface GameActions {
  incrementCoins: (coinType: 'silver' | 'gold') => void
  setGameOver: (_: boolean) => void
}

class GameEngine {
  private readonly VELOCITY = 2
  private readonly TILE_SIZE = 32

  private canvas: HTMLCanvasElement | null
  private tileMap: TileMap
  private character: Character | undefined
  private enemies: Enemy[] = []
  private gameActions: GameActions
  private isStopGame: boolean

  constructor(canvas: HTMLCanvasElement, gameActions: GameActions) {
    this.canvas = canvas
    this.tileMap = new TileMap(this.TILE_SIZE, canvas)
    this.tileMap.initialize().then(() => {
      this.character = this.tileMap.getCharacter(this.VELOCITY)
      this.enemies = []
      this.enemies = this.tileMap.getEnemies(this.VELOCITY)
    })
    this.gameActions = gameActions
    this.isStopGame = false
  }

  animate() {
    if (!this.isStopGame) {
      this.gameLoop()
      requestAnimationFrame(this.animate.bind(this))
    }
  }

  gameLoop() {
    if (this.canvas) {
      const ctx = this.canvas.getContext('2d')

      if (!ctx || !this.character) return

      ctx.imageSmoothingEnabled = false
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      this.tileMap.draw(ctx)
      this.character.draw(ctx, this.pause(), this.enemies)
      this.enemies.forEach((enemy) => enemy.draw(ctx, this.pause()))

      this.drawGameEnd()

      if (this.tileMap && this.tileMap.isCoinEaten()) {
        const coin = this.tileMap.getCoinEaten()
        coin && this.gameActions.incrementCoins(coin)
      }
    }
  }

  setPause(isStart: boolean) {
    this.isStopGame = isStart
  }

  pause() {
    return this.isStopGame
  }

  drawGameEnd() {
    const isCollideWith = this.enemies.some((enemy) =>
      enemy.collideWith(this.character)
    )
    if (isCollideWith) {
      this.setPause(true)
      this.gameActions.setGameOver(true)
    }
  }

  setCanvasSize() {
    this.canvas && this.tileMap.setCanvasSize(this.canvas)
  }
}

export default GameEngine
