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
  private game: Character | undefined
  private enemies: Enemy[] = []
  private gameActions: GameActions

  constructor(
    canvas: HTMLCanvasElement | null,
    tileSize: number,
    velocity: number,
    gameActions: GameActions
  ) {
    this.canvas = canvas
    this.tileMap = new TileMap(tileSize)
    this.game = this.tileMap.getCharacter(velocity)
    this.enemies = this.tileMap.getEnemies(velocity)
    this.gameActions = gameActions
  }

  animate() {
    this.gameLoop()
    if (!this.gameWin()) {
      requestAnimationFrame(this.animate.bind(this))
    }
  }

  gameOver() {
    return this.enemies.some((enemy) => enemy.collideWith(this.game))
  }

  gameWin() {
    return !this.gameWin && this.tileMap.didWin()
  }

  gameLoop() {
    const ctx = this.canvas!.getContext('2d')
    if (!ctx || !this.game || !this.canvas) return
    ctx.imageSmoothingEnabled = false

    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    this.tileMap.draw(ctx)
    this.drawGameEnd()
    this.game?.draw(ctx, this.pause(), this.enemies)
    this.enemies.forEach((enemy) => enemy.draw(ctx, this.pause(), this.game))

    if (this.tileMap && this.tileMap.isCoinEaten()) {
      const coin = this.tileMap.getCoinEaten()
      coin && this.gameActions.incrementCoins(coin)
    }
  }

  pause() {
    return this.gameOver() || this.gameWin()
  }

  drawGameEnd() {
    if (this.gameOver() || this.gameWin()) {
      const isCollideWith = this.enemies.some((enemy) =>
        enemy.collideWith(this.game)
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
    console.log('Restarting the game...')

    // Reset any game-related variables to their initial state
    this.game = this.tileMap.getCharacter(2)
    this.enemies = this.tileMap.getEnemies(2)

    if (!this.game || !this.canvas) return

    // Redraw the initial game state
    const ctx = this.canvas!.getContext('2d')
    if (ctx && this.canvas) {
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.tileMap.draw(ctx)

      this.drawGameEnd()
      this.game.draw(ctx, this.pause(), this.enemies)
      this.enemies.forEach((enemy) => enemy.draw(ctx, this.pause(), this.game))
    }

    // Restart any necessary game logic or animations
    // Example: this.timer = setInterval(() => { /* game logic */ }, 1000);
  }
}

export default GameEngine
