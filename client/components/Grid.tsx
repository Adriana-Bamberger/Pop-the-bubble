import React, { useState, useEffect } from 'react'

// // randomPlacement()
// selectRandomImage(min, max)
export function randomInteger(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function selectRandomImage() {
  const min = 0
  const max = 7

  const index = randomInteger(min, max)
  // console.log(min, max)

  return index
}

function getRandomCell() {
  const min = 0
  const max = 24
  const cellIndex = randomInteger(min, max)
  return cellIndex
}

const image = selectRandomImage()

const randomImg = (
  <img className="bubble-img" src={`/Bubble-${image}.png`} alt="bubble" />
)

function Grid() {
  const [Cell, setCell] = useState<boolean[]>(new Array(25).fill(false))

  const toggleImage = (clickIndex) => {
    setCell(
      [...Cell].map((value, index) => {
        if (index === clickIndex) {
          return false
        } else return value
      }),
    )
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = getRandomCell()
      const newCells = [...Cell]
      newCells[randomIndex] = true
      setCell(newCells)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  })

  return (
    <>
      <div className="grid-container">
        {Cell.map((isCell, index) => (
          <div
            onClick={() => toggleImage(index)}
            className="grid-cell"
            key={index}
          >
            {isCell ? randomImg : Cell}
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid
