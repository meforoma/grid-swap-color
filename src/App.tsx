import { useEffect, useState } from 'react'
import './App.css'
import { Grid, HoverLog, ModeAndButton } from './components/index'
import Confetti from 'react-confetti'

export function App() {
  const [start, setStart] = useState(false)
  const [hoveredSquares, setHoveredSquares] = useState<string[]>([])
  const [fieldSize, setFieldSize] = useState(3)

  const blueSquaresCount = document.querySelectorAll('.square--blue').length
  const allSquaresAreBlue = blueSquaresCount === fieldSize ** 2

  useEffect(() => {
    setHoveredSquares([])
  }, [fieldSize])

  return (
    <div className="App">
      {allSquaresAreBlue && <Confetti />}
      <div className="container--horizontal">

        <div className="container--vertical">
          <ModeAndButton
            setFieldSize={setFieldSize}
            setStart={setStart}
            start={start}
          />
          <Grid
            setHoveredSquares={setHoveredSquares}
            fieldSize={fieldSize}
            start={start}
          />
        </div>

        <HoverLog
          hoveredSquares={hoveredSquares}
          start={start}
        />
      </div>
    </div>
  )
}
