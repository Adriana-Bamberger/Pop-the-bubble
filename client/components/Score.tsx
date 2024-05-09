import { useState } from 'react'

function Score() {
  const [score, setScore] = useState(0)

  const increment = () => {
    return setScore(score + 1)
  }

  const reset = () => {
    return setScore(0)
  }

  return (
    <div className="scoreCounter">
      <h3>Score</h3>
      <p>counter: {score}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default Score
