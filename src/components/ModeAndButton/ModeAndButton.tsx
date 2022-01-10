import { Dispatch, SetStateAction } from 'react'
import modes from '../api/api.json'
import './ModeAndButton.css'

type Props = {
  setFieldSize: Dispatch<SetStateAction<number>>,
  setStart: Dispatch<SetStateAction<boolean>>,
  start: boolean
}

export function ModeAndButton({ setFieldSize, setStart, start }: Props) {
  const modesArray = Object.entries(modes)

  const modeOptions = modesArray.reduce((acc, mode) => {
    acc = [...acc, {
      name: mode[0],
      size: mode[1].field
    }]

    return acc
  }, [{ name: 'pick a mode', size: 3 }])

  return (
    <div className="mode-and-button">
      <select
        name="select-mode"
        onChange={(e) => {
          setFieldSize(Number(e.target.value))
        }}
      >
        {modeOptions.map((option, index) => (
          <option
            key={index}
            value={option.size}
          >
            {option.name}
            {(index > 0) && ` (x${option.size})`}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          setStart(true)
        }}
      >
        Start
      </button>
    </div>
  )
}
