import Header from './Header.js'
import Footer from './Footer.js'
import StartGame from './StartGame.js'
import { useState } from 'react'

function App() {
  // const [start, setStart] = useState(false)

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
      <div className="StartGameButtonDiv">
        {isVisible ? (
          <button className="StartGameButton" onClick={toggleVisibility}>
            <b>Start Game!</b>
          </button>
        ) : (
          <StartGame />
        )}
      </div>
    </>
  )
}

export default App
