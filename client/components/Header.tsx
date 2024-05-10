import Score from './Score'
function Header() {
  return (
    <div className="header">
      <h1 className="title">Pop The Bubble</h1>
      <p className="subtitle">Click to pop the bubbles!</p>
      <Score />
    </div>
  )
}

export default Header
