//1 - wall
//0 - dots
//4 - character
//5 - empty space
//6 - enemy
//7 - power dot

export const fullMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1,],
    [1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
    [1, 4, 1, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 1,],
    [1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1,],
    [1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1,],
    [1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1,],
    [1, 0, 5, 0, 1, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 1,],
    [1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1,],
    [1, 0, 1, 0, 1, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1,],
    [1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1,],
    [1, 0, 1, 0, 1, 0, 5, 0, 1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1, 0, 1, 0, 5, 0, 1,],
    [1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 5, 5, 5, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,],
    [1, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 1, 0, 1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 1,],
    [1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1,],
    [1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 1,],
    [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1,],
    [1, 0, 5, 0, 1, 0, 1, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 1,],
    [1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1,],
    [1, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 1, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1,],
    [1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1,],
    [1, 0, 5, 0, 5, 0, 1, 0, 1, 0, 1, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 1, 0, 1,],
    [1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1,],
    [1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1, 0, 5, 0, 5, 0, 5, 0, 5, 0, 5, 0, 1,],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
]

export const smallCoinsMap = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 7, 5, 0, 1, 0, 5, 0, 5, 0, 1, 0, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1,],
  [1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
  [1, 4, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 0, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 0, 5, 5, 1,],
  [1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 0, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1,],
  [1, 5, 5, 0, 5, 5, 1, 5, 5, 5, 5, 0, 1, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 0, 5, 5, 5, 5, 5, 5, 1,],
  [1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1,],
  [1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 0, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1,],
  [1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 0, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1,],
  [1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1,],
  [1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1,],
  [1, 5, 1, 5, 1, 5, 5, 5, 1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 6, 1, 5, 1, 5, 1, 5, 5, 5, 1,],
  [1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 5, 5, 5, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1, 5, 1,],
  [1, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 5, 5, 1, 5, 1, 5, 5, 5, 1, 5, 1, 5, 1,],
  [1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 5, 1,],
  [1, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 1, 0, 5, 5, 5, 5, 1, 0, 1, 0, 5, 5, 1, 0, 1, 0, 5, 0, 1,],
  [1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1,],
  [1, 0, 5, 0, 1, 0, 1, 5, 5, 7, 5, 5, 5, 5, 1, 7, 5, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 6, 5, 1,],
  [1, 5, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1, 1, 1, 1, 1,],
  [1, 5, 1, 5, 5, 5, 5, 5, 1, 5, 1, 5, 1, 5, 5, 5, 5, 5, 5, 5, 1, 5, 5, 5, 5, 5, 5, 5, 5, 0, 5, 0, 5, 0, 1,],
  [1, 5, 1, 1, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 5, 1,],
  [1, 0, 5, 5, 5, 0, 1, 5, 1, 0, 1, 5, 5, 5, 5, 0, 5, 5, 1, 0, 5, 5, 5, 0, 5, 5, 5, 0, 1, 5, 5, 0, 1, 5, 1,],
  [1, 1, 1, 5, 1, 1, 1, 5, 1, 5, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1,],
  [1, 0, 5, 5, 5, 0, 5, 5, 5, 0, 5, 5, 1, 0, 5, 5, 5, 0, 5, 5, 5, 0, 1, 5, 5, 0, 5, 5, 5, 0, 5, 5, 5, 0, 1,],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
]