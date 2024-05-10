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

const image = selectRandomImage()

const randomImg = (
  <img className="bubble-img" src={`/Bubble-${image}.png`} alt="bubble" />
)

function Grid() {
  const [Cell, setCell] = useState<boolean[]>(new Array(25).fill(false))

  return (
    <>
      <div className="grid-container">
        {Cell.map((isCell, index) => (
          <div className="grid-cell" key={index}>
            {isCell ? Cell : randomImg}
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid
