import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import Score from './Score.js'
import StartGame from './StartGame.js'
import { useState } from 'react'

const buttonText = 'Start Game'

function App() {
  const [start, setStart] = useState(false)

  const [isVisible, setIsVisible] = useState(true)

  const toggleVisibility = () => {
    setIsVisible(false)
  }

  return (
    <>
      <div>
        <Header />
        <Footer />
      </div>
      <div className="Start Game Button">
        {isVisible ? (
          <button onClick={toggleVisibility}>Start Game!</button>
        ) : (
          <StartGame />
        )}
      </div>
    </>
  )
}

export default App
