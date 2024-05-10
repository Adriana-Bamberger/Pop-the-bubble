import Header from './Header'
import Score from './Score'
import Body from './Body'
import Grid from './Grid'
import Footer from './Footer'
import StartButton from './StartButton.jsx'

function App() {
  return (
    <div>
      <Header />
      <div>
        <Score />
        <StartButton />
      </div>
      <Body />
      <Grid />
      <Footer />
    </div>
  )
}

export default App
