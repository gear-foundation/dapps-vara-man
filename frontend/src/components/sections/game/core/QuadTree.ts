export class Rectangle {
  constructor(
    public x: number,
    public y: number,
    public width: number,
    public height: number
  ) {}

  contains(x: number, y: number): boolean {
    return (
      x >= this.x &&
      x <= this.x + this.width &&
      y >= this.y &&
      y <= this.y + this.height
    )
  }

  intersects(otherRect: Rectangle): boolean {
    return (
      this.x < otherRect.x + otherRect.width &&
      this.x + this.width > otherRect.x &&
      this.y < otherRect.y + otherRect.height &&
      this.y + this.height > otherRect.y
    )
  }
}

export class QuadTree {
  boundary: Rectangle
  capacity: number
  objects: any[]
  children: QuadTree[]

  constructor(boundary: Rectangle, capacity: number) {
    this.boundary = boundary // The boundary of the quad-tree node
    this.capacity = capacity // The maximum number of objects before splitting
    this.objects = [] // Array to hold objects in this quad
    this.children = [] // Array to hold the four child quads
  }

  // Insert an object into the quad-tree
  insert(obj: any): boolean {
    if (!this.boundary.contains(obj.x, obj.y)) {
      return false // Object is outside the quad-tree boundary
    }

    if (this.objects.length < this.capacity) {
      this.objects.push(obj)
      return true
    }

    if (!this.children.length) {
      this.split()
    }

    for (let child of this.children) {
      if (child.insert(obj)) {
        return true
      }
    }

    return false
  }

  // Splits the quad-tree into four child quads
  split(): void {
    const { x, y, width, height } = this.boundary
    const halfWidth = width / 2
    const halfHeight = height / 2

    this.children.push(
      new QuadTree(new Rectangle(x, y, halfWidth, halfHeight), this.capacity)
    )
    this.children.push(
      new QuadTree(
        new Rectangle(x + halfWidth, y, halfWidth, halfHeight),
        this.capacity
      )
    )
    this.children.push(
      new QuadTree(
        new Rectangle(x, y + halfHeight, halfWidth, halfHeight),
        this.capacity
      )
    )
    this.children.push(
      new QuadTree(
        new Rectangle(x + halfWidth, y + halfHeight, halfWidth, halfHeight),
        this.capacity
      )
    )
  }

  // Returns all objects that could potentially collide with a given object
  getPotentialCollisions(obj: any): any[] {
    let potentialCollisions: any[] = this.objects.filter((o) => o !== obj)
    for (let child of this.children) {
      if (child.boundary.intersects(obj.getBoundingBox())) {
        potentialCollisions = potentialCollisions.concat(
          child.getPotentialCollisions(obj)
        )
      }
    }
    return potentialCollisions
  }
}
