// // randomPlacement()
// selectRandomImage(min, max)
export function randomInteger(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function selectRandomImage() {
  const min = 0
  const max = 7

  const index = randomInteger(min, max)
  // console.log(min, max)

  return index
}

const image = selectRandomImage()

function Grid() {
  return (
    <div>
      <img src={`/Bubble-${image}.png`} />
      <table>
        <tbody>
          <tr>
            <td></td>

            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Grid
