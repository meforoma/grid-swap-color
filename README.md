# Grid swapping color on hover and logging moves
Implementation of components interaction and proper state preservation in a small app.
Using:
- TypeScript
- props drilling
- hooks: useState, useEffect - to clear the Hover log on grid size change
- React.memo to preserve cells styling unless grid size changes
- a small rewarding Confetti animation when all cells are turned blue 🎊

## How to use
- pick a mode (= field size)
-- grid-based element will generate the relevant layout
- click a `Start` button to trigger cells changing colors on hover
- each hovered cell coordinates will display on the Hover log
- hover all the cells to turn them blue! ⬜->🟦