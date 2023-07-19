import MovingDirection from './MovingDirection'

import Tamagochi from '@/assets/images/game/tamagochi.svg'

export default class Character {
  x: number
  y: number
  tileSize: number
  velocity: number
  tileMap: any

  currentMovingDirection: any
  requestedMovingDirection: any

  characterAnimationTimerDefault: number
  characterAnimationTimer: number | null

  characterRotation: any
  powerDotActive: boolean
  powerDotAboutToExpire: boolean
  timers: number[]

  madeFirstMove: boolean | undefined

  Rotation = MovingDirection

  characterImages!: HTMLImageElement[]
  characterImageIndex!: number

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

    this.currentMovingDirection = null
    this.requestedMovingDirection = null

    this.characterAnimationTimerDefault = 10
    this.characterAnimationTimer = null

    this.characterRotation = this.Rotation.right
    this.powerDotActive = false
    this.powerDotAboutToExpire = false
    this.timers = []

    document.addEventListener('keydown', this.keydown)

    this.loadCharacterImages()
  }

  draw(ctx: CanvasRenderingContext2D, pause: boolean, enemies: any[]) {
    if (!pause) {
      this.move()
      this.animate()
    }
    this.eatDot()
    this.eatGhost(enemies)

    const size = this.tileSize

    ctx.save()
    ctx.translate(this.x + size, this.y + size)
    // ctx.rotate((this.characterRotation * 90 * Math.PI) / 180)

    ctx.drawImage(
      this.characterImages[this.characterImageIndex],
      -size - 10,
      -size * 2
    )

    ctx.restore()
  }

  private loadCharacterImages() {
    const characterImage1 = new Image()
    characterImage1.src = Tamagochi

    const characterImage2 = new Image()
    characterImage2.src = Tamagochi

    const characterImage3 = new Image()
    characterImage3.src = Tamagochi

    const characterImage4 = new Image()
    characterImage4.src = Tamagochi
    this.characterImages = [
      characterImage1,
      characterImage2,
      characterImage3,
      characterImage4,
    ]

    this.characterImageIndex = 0
  }

  private keydown = (event: KeyboardEvent) => {
    //up
    if (event.keyCode == 38) {
      if (this.currentMovingDirection == MovingDirection.down)
        this.currentMovingDirection = MovingDirection.up
      this.requestedMovingDirection = MovingDirection.up
      this.madeFirstMove = true
    }
    //down
    if (event.keyCode == 40) {
      if (this.currentMovingDirection == MovingDirection.up)
        this.currentMovingDirection = MovingDirection.down
      this.requestedMovingDirection = MovingDirection.down
      this.madeFirstMove = true
    }
    //left
    if (event.keyCode == 37) {
      if (this.currentMovingDirection == MovingDirection.right)
        this.currentMovingDirection = MovingDirection.left
      this.requestedMovingDirection = MovingDirection.left
      this.madeFirstMove = true
    }
    //right
    if (event.keyCode == 39) {
      if (this.currentMovingDirection == MovingDirection.left)
        this.currentMovingDirection = MovingDirection.right
      this.requestedMovingDirection = MovingDirection.right
      this.madeFirstMove = true
    }
  }

  private move() {
    if (this.currentMovingDirection !== this.requestedMovingDirection) {
      if (
        Number.isInteger(this.x / this.tileSize) &&
        Number.isInteger(this.y / this.tileSize)
      ) {
        if (
          !this.tileMap.didCollideWithEnvironment(
            this.x,
            this.y,
            this.requestedMovingDirection
          )
        )
          this.currentMovingDirection = this.requestedMovingDirection
      }
    }

    if (
      this.tileMap.didCollideWithEnvironment(
        this.x,
        this.y,
        this.currentMovingDirection
      )
    ) {
      this.characterAnimationTimer = null
      this.characterImageIndex = 1
      return
    } else if (
      this.currentMovingDirection != null &&
      this.characterAnimationTimer == null
    ) {
      this.characterAnimationTimer = this.characterAnimationTimerDefault
    }

    switch (this.currentMovingDirection) {
      case MovingDirection.up:
        this.y -= this.velocity
        this.characterRotation = this.Rotation.up
        break
      case MovingDirection.down:
        this.y += this.velocity
        this.characterRotation = this.Rotation.down
        break
      case MovingDirection.left:
        this.x -= this.velocity
        this.characterRotation = this.Rotation.left
        break
      case MovingDirection.right:
        this.x += this.velocity
        this.characterRotation = this.Rotation.right
        break
    }
  }

  private animate() {
    if (this.characterAnimationTimer == null) {
      return
    }
    this.characterAnimationTimer--
    if (
      this.characterAnimationTimer === 0 &&
      this.characterImageIndex &&
      this.characterImages
    ) {
      this.characterAnimationTimer = this.characterAnimationTimerDefault
      this.characterImageIndex++
      if (this.characterImageIndex === this.characterImages.length)
        this.characterImageIndex = 0
    }
  }

  private eatDot() {
    this.tileMap.eatDot(this.x, this.y)
  }


  private eatGhost(enemies: any[]) {
    if (this.powerDotActive) {
      const collideEnemies = enemies.filter((enemy) => enemy.collideWith(this))
      collideEnemies.forEach((enemy) => {
        enemies.splice(enemies.indexOf(enemy), 1)
      })
    }
  }
}
