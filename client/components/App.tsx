import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import StartButton from './StartButton.jsx'
import Score from './Score.js'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Score />
        <StartButton />
      </div>
      <Body />
      <Footer />
    </div>
  )
}

export default App
