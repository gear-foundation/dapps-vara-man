import Character from './Character'
import Enemy from './Enemy'
import TileMap from './TileMap'

interface GameActions {
  incrementCoins: (coinType: 'silver' | 'gold') => void
  decrementLives: () => void
}

class GameEngine {
  private canvas: HTMLCanvasElement | null
  private tileMap: TileMap
  private character: Character | undefined
  private enemies: Enemy[] = []
  private gameActions: GameActions
  private animationFrameId: number | null = null
  private gameLoopTimer: number | null = null

  constructor(
    canvas: HTMLCanvasElement | null,
    tileSize: number,
    velocity: number,
    gameActions: GameActions
  ) {
    this.canvas = canvas
    this.tileMap = new TileMap(tileSize)
    this.character = this.tileMap.getCharacter(velocity)
    this.enemies = this.tileMap.getEnemies(velocity)
    this.gameActions = gameActions
  }

  animate() {
    this.gameLoop()
    if (!this.gameWin()) {
      this.animationFrameId = requestAnimationFrame(this.animate.bind(this))
    }
  }

  gameOver() {
    return this.enemies.some((enemy) => enemy.collideWith(this.character))
  }

  gameWin() {
    return !this.gameOver() && this.tileMap.didWin() // Use gameOver() instead of gameWin()
  }

  gameLoop() {
    const ctx = this.canvas!.getContext('2d')
    if (!ctx || !this.character || !this.canvas) return
    ctx.imageSmoothingEnabled = false

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.tileMap.draw(ctx)
    this.drawGameEnd()

    this.character.draw(ctx, this.pause(), this.enemies)
    this.enemies.forEach((enemy) => enemy.draw(ctx, this.pause()))

    if (this.tileMap && this.tileMap.isCoinEaten()) {
      const coin = this.tileMap.getCoinEaten()
      coin && this.gameActions.incrementCoins(coin)
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

    // Reset the canvas to a blank state if required
    const ctx = this.canvas?.getContext('2d')
    if (ctx && this.canvas) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
  }

  pause() {
    return this.gameOver() || this.gameWin()
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

    this.character = this.tileMap.getCharacter(2)
    this.enemies = this.tileMap.getEnemies(2)
  }
}

export default GameEngine
