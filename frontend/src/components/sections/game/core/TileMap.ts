import Character from './Character'
import Enemy from './Enemy'
import MovingDirection from './MovingDirection'

import SilverCoin from '@/assets/images/game/silver_coin.svg'
import GoldCoin from '@/assets/images/game/gold_coin.svg'
import { fullMap, smallCoinsMap } from './const'
import { QuadTree, Rectangle } from './QuadTree'

class TileMap {
  private tileSize: number
  private width: number
  private height: number
  private silverDot: HTMLImageElement
  private goldDot: HTMLImageElement
  private wall!: HTMLImageElement
  private powerDot: HTMLImageElement
  private powerDotAnimationTimerDefault: number
  private powerDotAnimationTimer: number
  private map: number[][]
  private initialMap: number[][]
  private collectedCoins: {
    row: number
    column: number
    type: 'silver' | 'gold'
  }[] = []

  private coinEaten: boolean
  private coinType: 'silver' | 'gold' | null = null

  quadTree: QuadTree // Add a quadTree property to the class

  constructor(tileSize: number, width: number, height: number) {
    this.tileSize = tileSize
    this.width = width
    this.height = height

    this.silverDot = new Image()
    this.silverDot.src = SilverCoin

    this.goldDot = new Image()
    this.goldDot.src = GoldCoin

    this.powerDot = this.goldDot
    this.powerDotAnimationTimerDefault = 30
    this.powerDotAnimationTimer = this.powerDotAnimationTimerDefault

    this.coinEaten = false
    this.coinType = null

    //1 - wall
    //0 - dots
    //4 - character
    //5 - empty space
    //6 - enemy
    //7 - power dot
    this.map = fullMap
    this.initialMap = this.map.map((row) => row.slice())
    this.quadTree = new QuadTree(
      new Rectangle(0, 0, this.width, this.height),
      4
    )
  }

  public resetMap() {
    this.map = this.initialMap.map((row) => row.slice())
  }

  public draw(ctx: CanvasRenderingContext2D): void {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column]

        if (tile === 0) {
          this.drawDot(ctx, column, row)
        } else if (tile === 7) {
          this.drawPowerDot(ctx, column, row)
        }
      }
    }

    this.collectedCoins.forEach(({ row, column }) => {
      this.map[row][column] = 5
    })
  }

  private drawDot(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number
  ): void {
    const tileSize = this.tileSize
    const x = column * tileSize
    const y = row * tileSize

    ctx.drawImage(this.silverDot, x, y, tileSize, tileSize)
  }

  private drawPowerDot(
    ctx: CanvasRenderingContext2D,
    column: number,
    row: number
  ): void {
    const tileSize = this.tileSize
    const x = column * tileSize
    const y = row * tileSize

    ctx.drawImage(this.goldDot, x, y, tileSize, tileSize)
  }

  // private drawWall(
  //   ctx: CanvasRenderingContext2D,
  //   column: number,
  //   row: number,
  //   size: number
  // ): void {
  //   ctx.fillStyle = '#6e6e6e8c'
  //   ctx.fillRect(
  //     column * this.tileSize + 7.5,
  //     row * this.tileSize + 7.5,
  //     size / 2,
  //     size / 2
  //   )
  // }

  public getCharacter(velocity: number): Character | undefined {
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        let tile = this.map[row][column]
        if (tile === 4) {
          this.map[row][column] = 5
          return new Character(
            column * this.tileSize,
            row * this.tileSize,
            this.tileSize,
            velocity,
            this
          )
        }
      }
    }
    return undefined
  }

  public getEnemies(velocity: number): Enemy[] {
    const enemies: Enemy[] = []

    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        const tile = this.map[row][column]
        if (tile === 6) {
          this.map[row][column] = 0
          enemies.push(
            new Enemy(
              column * this.tileSize,
              row * this.tileSize,
              this.tileSize,
              velocity,
              this
            )
          )
        }
      }
    }

    this.quadTree = new QuadTree(new Rectangle(0, 0, 700, 700), 4)
    for (const enemy of enemies) {
      this.quadTree.insert(enemy)
    }

    return enemies
  }

  public setCanvasSize(canvas: HTMLCanvasElement): void {
    if (!canvas) {
      throw new Error('Missing canvas argument')
    }
    canvas.width = this.map[0].length * this.tileSize
    canvas.height = this.map.length * this.tileSize
  }

  public didCollideWithEnvironment(
    x: number,
    y: number,
    direction: number | null
  ): boolean {
    if (direction === null) {
      return false
    }

    if (
      Number.isInteger(x / this.tileSize) &&
      Number.isInteger(y / this.tileSize)
    ) {
      let column = 0
      let row = 0
      let nextColumn = 0
      let nextRow = 0

      switch (direction) {
        case MovingDirection.right:
          nextColumn = x + this.tileSize
          column = nextColumn / this.tileSize
          row = y / this.tileSize
          break
        case MovingDirection.left:
          nextColumn = x - this.tileSize
          column = nextColumn / this.tileSize
          row = y / this.tileSize
          break
        case MovingDirection.up:
          nextRow = y - this.tileSize
          row = nextRow / this.tileSize
          column = x / this.tileSize
          break
        case MovingDirection.down:
          nextRow = y + this.tileSize
          row = nextRow / this.tileSize
          column = x / this.tileSize
          break
      }

      const tile = this.map[row][column]
      return tile === 1
    }

    return false
  }

  // isEnemyCollidingWithMap(enemy: Enemy): boolean {
  //   return (
  //     enemy.x < 0 ||
  //     enemy.x + enemy.tileSize > 700 ||
  //     enemy.y < 0 ||
  //     enemy.y + enemy.tileSize > 700
  //   );
  // }

  public didWin(): boolean {
    return this.dotsLeft() === 0
  }

  private dotsLeft(): number {
    return this.map.flat().filter((tile) => tile === 0).length
  }

  public eatDot(x: number, y: number): boolean {
    const tileSize = this.tileSize
    const row = Math.floor(y / tileSize)
    const column = Math.floor(x / tileSize)

    const coinValues: { [key: number]: 'silver' | 'gold' } = {
      0: 'silver',
      7: 'gold',
    }

    if (
      row >= 0 &&
      row < this.map.length &&
      column >= 0 &&
      column < this.map[0].length
    ) {
      const currentValue = this.map[row][column]
      const coinType = coinValues[currentValue]

      if (coinType) {
        this.map[row][column] = 5
        this.coinType = coinType
        this.coinEaten = true
        this.collectedCoins.push({ row, column, type: coinType })
        return true
      }
    }

    this.coinEaten = false
    return false
  }

  public isCoinEaten(): boolean {
    return this.coinEaten
  }

  public getCoinEaten() {
    return this.coinType
  }
}

export default TileMap
