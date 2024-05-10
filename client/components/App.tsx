import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import Score from './Score.js'
import StartGame from './StartGame.js'
import { useState } from 'react'

function App() {
  const [start, setStart] = useState(false)

  return (
    <>
      <div>
        <Header />
        <Footer />
      </div>
      <button onClick={() => setStart(true)}>Start Game</button>

      <main>{start === true && <StartGame />}</main>
    </>
  )
}

export default App
