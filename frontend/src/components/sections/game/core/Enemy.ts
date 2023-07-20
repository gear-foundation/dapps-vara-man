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

  draw(ctx: CanvasRenderingContext2D, pause: boolean, character: any) {
    if (!pause) {
      this.move()
      this.changeDirection()
    }
    this.setImage(ctx, character)
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

  private setImage(ctx: CanvasRenderingContext2D, character: any) {
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

    this.scaredGhost = new Image()
    this.scaredGhost.src = Zombie

    this.scaredGhost2 = new Image()
    this.scaredGhost2.src = Zombie

    this.image = this.normalGhost
  }
}
