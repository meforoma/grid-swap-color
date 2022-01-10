import { nanoid } from 'nanoid'
import React, { Dispatch, SetStateAction } from 'react'
import './Grid.css'

type Props = {
  setHoveredSquares: Dispatch<SetStateAction<string[]>>,
  fieldSize: number,
  start: boolean
}

export const Grid = React.memo(
  ({ setHoveredSquares, fieldSize, start }: Props) => {
    const grid = new Array(fieldSize ** 2).fill('')

    const updateLog = (index: number) => {
      const row = Math.ceil((index + 1) / fieldSize)
      const col = index % fieldSize + 1
      const logString = `row ${row} col ${col}`

      // reverted logging to show latest moves in a scrolled log
      setHoveredSquares(prev => [logString, ...prev])
    }

    return (
      <div
        className="grid-container"
        style={{
          gridTemplateColumns: `repeat(${fieldSize}, 1fr)`
        }}
      >
        {grid.map((square, index) => (
          <div
            key={nanoid()}
            className='square'
            onMouseEnter={(e) => {
              if (!start) {
                return
              }

              const target = e.target as HTMLDivElement
              const classes = target.classList

              classes.value.includes('square--blue')
                ? classes.remove('square--blue')
                : classes.add('square--blue')

              updateLog(index)
            }}
          />
        ))}
      </div>
    )
  }
)
