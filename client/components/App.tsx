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
