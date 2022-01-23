import { WINNING_COMBOS, SCORES, switchPlayer } from "../constants/constants";

function getEmptyCells(cells){
    let squares = [];
    cells.forEach((square, i) => {
        if (square === "") squares.push(i);
    });
    return squares;
};
const makeMove = (cells, square, player) => {
    if (cells[square] === "") {
        cells[square] = player;
    }
};
const getWinner = (board) => {
    let res = null;
    WINNING_COMBOS.forEach((el, i) => {
        if (board[el[0]] !== "" && board[el[0]] === board[el[1]] && board[el[0]] === board[el[2]]) {
            res = board[el[0]];
        }   else if (res === null && getEmptyCells(board).length === 0) {
            res = 0;
        }
    })
    return res;
}
function minimax(board, player) {
    const mult = SCORES[player];
    let thisScore;
    let maxScore = -1;
    let bestMove = null;
    if (getWinner(board) !== null) {
        return [SCORES[getWinner(board)], 0];
    } else {
        for (let empty of getEmptyCells(board)) {
            let copy = [...board];
            makeMove(copy, empty, player);
            thisScore = mult * minimax(copy, switchPlayer(player))[0];
            if (thisScore >= maxScore) {
                maxScore = thisScore;
                bestMove = empty;
            }
        }
        return [mult * maxScore, bestMove];
    }
}
export default minimax;