import { cellStates } from "./cellManager"

export const removeAndIncreaseCells = (cells, setScore) => {
    return cells.filter(cell => cell.state !== cellStates.DYING).map(cell => {
        if(cell.state === cellStates.INCREASE){
            cell.value *= 2
            setScore(prev => prev + cell.value)
        }

        cell.state = cellStates.IDLE
        return cell
    })
}