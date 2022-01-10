import './HoverLog.css'

type Props = {
  hoveredSquares: string[],
  start: boolean
}

export const HoverLog = ({ hoveredSquares, start }: Props) => (
  <div>
    <div className="log-header">
      Hover log
    </div>
    <div
      className="hover-log"
    >
      {start && hoveredSquares.map((elem, index) => (
        <div key={index} className='logLine'>
          {/* -(index - hoveredSquares.length) - to display the proper move count */}
          {elem}
          <br />
          (move {-(index - hoveredSquares.length)})
        </div>
      ))}
    </div>
  </div>
)
