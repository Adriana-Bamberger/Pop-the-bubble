import Header from './Header.js'
import Body from './Body.js'
import Footer from './Footer.js'
import Score from './Score.js'
import { useState } from 'react'

function StartGame() {
  const [start, setStart] = useState(false)
  return (
    <>
      <nav>
        <button onClick={() => setStart(true)}>Start Game</button>
      </nav>

      <main>{start === true && <App />}</main>
    </>
  )
}

function App() {
  return (
    <div>
      <div>test</div>
      <Header />

      <Score />

      <Body />
      <Footer />
    </div>
  )
}

export default App
