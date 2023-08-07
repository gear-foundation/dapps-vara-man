import Character from './Character'
import Enemy from './Enemy'
import TileMap from './TileMap'

interface GameActions {
  incrementCoins: (coinType: 'silver' | 'gold') => void
  decrementLives: () => void
}

class GameEngine {
  private readonly VELOCITY = 2
  private readonly TILE_SIZE = 32

  private canvas: HTMLCanvasElement | null
  private tileMap: TileMap
  private character: Character | undefined
  private enemies: Enemy[] = []
  private gameActions: GameActions
  private animationFrameId: number | null = null
  private gameLoopTimer: number | null = null
  private isStopGame: boolean

  constructor(canvas: HTMLCanvasElement, gameActions: GameActions) {
    this.canvas = canvas
    this.tileMap = new TileMap(this.TILE_SIZE, canvas)
    this.character = this.tileMap.getCharacter(this.VELOCITY)
    this.enemies = this.tileMap.getEnemies(this.VELOCITY)
    this.gameActions = gameActions
    this.isStopGame = false
  }

  animate() {
    if (!this.gameWin()) {
      this.gameLoop()
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this))
    }
  }

  gameOver() {
    return this.enemies.some((enemy) => enemy.collideWith(this.character))
  }

  gameWin() {
    return !this.gameOver() && this.tileMap.didWin()
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

  destroy() {
    // Stop the game loop and cancel any pending animation frames
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId)
      this.animationFrameId = null
    }

    // Clear any existing timers
    if (this.gameLoopTimer !== null) {
      clearTimeout(this.gameLoopTimer)
      this.gameLoopTimer = null
    }
  }

  pause() {
    return this.gameOver() || this.gameWin() || this.isStopGame
  }

  drawGameEnd() {
    if (this.gameOver() || this.gameWin()) {
      const isCollideWith = this.enemies.some((enemy) =>
        enemy.collideWith(this.character)
      )
      if (isCollideWith) {
        this.gameActions.decrementLives()
        this.restart()
      }
    }
  }

  setCanvasSize() {
    this.canvas && this.tileMap.setCanvasSize(this.canvas)
  }

  restart() {
    this.tileMap.resetMap()

    this.character = this.tileMap.getCharacter(this.VELOCITY)
    this.enemies = this.tileMap.getEnemies(this.VELOCITY)
  }
}

export default GameEngine
