import MovingDirection from './MovingDirection'
import Zombie from '@/assets/images/game/zombie.svg'

export default class Enemy {
  x: number
  y: number
  tileSize: number
  velocity: number
  tileMap: any

  movingDirection: number
  directionTimerDefault: number
  directionTimer: number
  scaredAboutToExpireTimerDefault: number
  scaredAboutToExpireTimer: number
  normalGhost!: HTMLImageElement
  scaredGhost!: HTMLImageElement
  scaredGhost2!: HTMLImageElement
  image!: HTMLImageElement

  private directionChangeInterval: number = 1000
  private lastDirectionChangeTime: number = 0

  constructor(
    x: number,
    y: number,
    tileSize: number,
    velocity: number,
    tileMap: any
  ) {
    this.x = x
    this.y = y
    this.tileSize = tileSize
    this.velocity = velocity
    this.tileMap = tileMap

    this.loadImages()

    this.movingDirection = Math.floor(
      Math.random() * Object.keys(MovingDirection).length
    )

    this.directionTimerDefault = this.random(10, 25)
    this.directionTimer = this.directionTimerDefault

    this.scaredAboutToExpireTimerDefault = 10
    this.scaredAboutToExpireTimer = this.scaredAboutToExpireTimerDefault
  }

  getCurrentCell(): { row: number; column: number } {
    const currentRow = Math.floor(this.y / this.tileSize)
    const currentColumn = Math.floor(this.x / this.tileSize)
    return { row: currentRow, column: currentColumn }
  }

  getAdjacentCells(): { row: number; column: number }[] {
    const currentCell = this.getCurrentCell()
    const adjacentCells: { row: number; column: number }[] = []

    adjacentCells.push({ row: currentCell.row - 1, column: currentCell.column })
    adjacentCells.push({ row: currentCell.row + 1, column: currentCell.column })
    adjacentCells.push({ row: currentCell.row, column: currentCell.column - 1 })
    adjacentCells.push({ row: currentCell.row, column: currentCell.column + 1 })

    return adjacentCells
  }

  chooseDirectionBasedOnAdjacentCells(): number {
    const currentCell = this.getCurrentCell()
    const adjacentCells = this.getAdjacentCells()

    const currentTime = Date.now()

    // Проверяем, прошло ли достаточно времени с последней смены направления
    if (
      currentTime - this.lastDirectionChangeTime >=
      this.directionChangeInterval
    ) {
      const availableDirections: number[] = []

      for (const cell of adjacentCells) {
        const cellValue = this.tileMap.initialMap[cell.row][cell.column]
        if (cellValue === 0 || cellValue === 5) {
          const direction = this.calculateDirectionToCell(currentCell, cell)
          availableDirections.push(direction)
        }
      }

      if (
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        // Если есть доступные направления, выбираем случайное из них
        if (availableDirections.length > 0) {
          const randomIndex = Math.floor(
            Math.random() * availableDirections.length
          )
          const newDirection = availableDirections[randomIndex]

          this.movingDirection = newDirection

          // Обновляем время последней смены направления
          this.lastDirectionChangeTime = currentTime
        }
      }
    }

    return this.movingDirection
  }

  calculateDirectionToCell(
    currentCell: { row: number; column: number },
    targetCell: { row: number; column: number }
  ): number {
    // Вычисляем направление к целевой клетке относительно текущей клетки
    if (targetCell.row < currentCell.row) {
      return MovingDirection.up
    } else if (targetCell.row > currentCell.row) {
      return MovingDirection.down
    } else if (targetCell.column < currentCell.column) {
      return MovingDirection.left
    } else if (targetCell.column > currentCell.column) {
      return MovingDirection.right
    }

    // Если клетки находятся на одной и той же позиции, возвращаем текущее направление
    return this.movingDirection
  }

  draw(ctx: CanvasRenderingContext2D, pause: boolean) {
    if (!pause) {
      // Вызываем метод chooseDirectionBasedOnAdjacentCells() для получения направления
      const newDirection = this.chooseDirectionBasedOnAdjacentCells()

      // Если новое направление не совпадает с текущим, обновляем направление
      if (newDirection !== this.movingDirection) {
        this.movingDirection = newDirection
      }

      this.move()
    }
    this.setImage(ctx)
  }

  collideWith(character: any) {
    const size = this.tileSize / 2
    if (
      this.x < character.x + size &&
      this.x + size > character.x &&
      this.y < character.y + size &&
      this.y + size > character.y
    ) {
      return true
    } else {
      return false
    }
  }

  private setImage(ctx: CanvasRenderingContext2D) {
    ctx.drawImage(this.image, this.x - 5, this.y - 20)
  }

  private changeDirection() {
    this.directionTimer--
    let newMoveDirection = null
    if (this.directionTimer == 0) {
      this.directionTimer = this.directionTimerDefault
      newMoveDirection = Math.floor(
        Math.random() * Object.keys(MovingDirection).length
      )
    }

    if (newMoveDirection != null && this.movingDirection != newMoveDirection) {
      if (
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        if (
          !this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            newMoveDirection
          )
        ) {
          this.movingDirection = newMoveDirection
        }
      }
    }
  }

  private move() {
    if (
      !this.tileMap.didCollideWithEnvironment(
        this.x,
        this.y,
        this.movingDirection
      )
    ) {
      switch (this.movingDirection) {
        case MovingDirection.up:
          this.y -= this.velocity
          break
        case MovingDirection.down:
          this.y += this.velocity
          break
        case MovingDirection.left:
          this.x -= this.velocity
          break
        case MovingDirection.right:
          this.x += this.velocity
          break
      }
    }
  }

  private random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  private loadImages() {
    this.normalGhost = new Image()
    this.normalGhost.src = Zombie

    // this.scaredGhost = new Image()
    // this.scaredGhost.src = Zombie

    // this.scaredGhost2 = new Image()
    // this.scaredGhost2.src = Zombie

    this.image = this.normalGhost
  }
}
