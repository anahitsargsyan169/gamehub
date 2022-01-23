import React, {useState, useEffect} from "react";
import { WINNING_COMBOS, GAME_TYPES, PLAYER_X, PLAYER_O, switchPlayer, getRandomInt } from "../constants/constants";
import Header from "./Header";
import Footer from "./Footer";
import Square from "./Square";
import minimax from "./minimax";


const Board = () => {
    const [turn, setTurn] = useState("X");
    const [cells, setCells] = useState(Array(9).fill(""));
    const [gameState, setGameState] = useState(null);
    const [scoreX, setScoreX] = useState(0);
    const [scoreO, setScoreO] = useState(0);
    const [winCombo, setWinCombo] = useState(null);
    const [isComputerMove, setIsComputerMove] = useState(false)
    const [gameType, setGameType] = useState(GAME_TYPES.VERSUS_COMPUTER);
    function getEmptyCells(cells){
        let squares = [];
        cells.forEach((square, i) => {
            if (square === "") squares.push(i);
        });
        return squares;
    };

    const handleClick = (id) => {       
        if(gameState === null) {
            if(!gameType){
                if(turn === "X" && cells[id-1] === "" ) {
                    humanMove(id-1);
                } 
            } else {
                if(cells[id-1] === "") {
                    humanMove(id-1);
                }
            }
        }
    }

    useEffect(() => {
        restartGame();        
    }, [gameType]);

    const restartGame = (reset) => {
        setCells(Array(9).fill(""));
        setTurn("X");
        setGameState(null);
        setWinCombo(null);
        setIsComputerMove(false);
        if(reset) {
            setScoreO(0);
            setScoreX(0);
        }
    }

    const isWinCell = (id) => {
        if(winCombo !== null){
            return winCombo.some(el => el == id-1);
        }
    }
    const checkWin = (squares) => {
        let res = null;
        WINNING_COMBOS.forEach((el, i) => {
            if (squares[el[0]] !== "" && squares[el[0]] === squares[el[1]] && squares[el[0]] === squares[el[2]]) {
                res = squares[el[0]];
                setGameState(squares[el[0]]);
                setWinCombo(el);
                squares[el[0]] === "X" ? setScoreX(scoreX+1) : setScoreO(scoreO+1);
            }    
        })
        if (res === null && getEmptyCells(squares).length === 0) {
            setGameState("DRAW");
        }
    }

    useEffect(() => {
        if(isComputerMove && !gameState){  
            let index;     
            if (Math.random() < 0.8) {
                index = minimax(cells, "O")[1];
        } else {
            do {
                index = getRandomInt(0, 8);
            } while (cells[index] !== "");
        }     
            //let index = minimax(cells, "O")[1];
            setTimeout(() => {
                move(index, turn)
            }, 500);
            setIsComputerMove(false); 
            setTurn("X")
        }
    }, [turn]);

    const move = (index, turn) => {
        setCells(() => {
            const squares = [...cells];
            squares[index] = turn;
            checkWin(squares)
            return squares;
            });
        }
    
    const humanMove = index => {
        move(index, turn);
        if(!gameType && !gameState) {
            setIsComputerMove(true);
        }
        setTurn(switchPlayer(turn));
    };

    const Cell = ({name,id}) => {
        return <div id={id} className={name} key={id} onClick={()=> handleClick(id)}><Square className={isWinCell(id) ? "win" : null} turn={cells[id-1]}/></div>
    }

    return (
        <>
            <div className="tic-tac-toe-container">
            <Header gameType={gameType} setGameType={setGameType}  />
            <div id= "board">
                <Cell id='1' name="top left"/>
                <Cell id='2' name="top"/>
                <Cell id='3' name="top right"/>
                <Cell id='4' name="left"/>
                <Cell id='5' name="center"/>
                <Cell id='6' name="right"/>
                <Cell id='7' name="bottom left"/>
                <Cell id='8' name="bottom"/>
                <Cell id='9' name="bottom right"/>
            </div>
            <Footer context={{"gameState":gameState, "turn":turn, "restartFunc":restartGame, "score":[scoreX,scoreO]}} />
            </div>
        </>
    )
    
}
export default Board;