export function randomInteger(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// export function randomPlacement() {}

const allBubbles = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
]
// const [bubble, setBubble] = useState({
//   first: false,
//   second: false,
//   third: false,
//   fourth: false,
//   fifth: false,
//   sixth: false,
//   seventh: false,
//   eighth: false,
// })

export function selectRandomImage(min: number, max: number) {
  min = 0
  max = allBubbles.length

  const selectedBubble = randomInteger(min, max)
  console.log(min, max)
  console.log(selectedBubble)
}
