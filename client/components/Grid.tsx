import React, { useState, useEffect } from 'react'

function Grid() {
  const [Cell, setCell] = useState<boolean[]>(new Array(25).fill(false))

  return (
    <div className="grid-container">
      {Cell.map((isCell, index) => (
        <div className="grid-cell" key={index}>
          {isCell}
        </div>
      ))}
    </div>
  )
}

export default Grid
