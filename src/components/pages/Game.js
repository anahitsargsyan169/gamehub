import { useParams } from "react-router-dom";

import Game2048 from "../games/Game2048/Game2048";
import MemoryGame from "../games/MemoryGame/index";
import TicTacToe from "../games/TicTacToe/App";
import TicTacToe2 from "../games/TicTacToeV2/App";
import RockPaperScissors from "../games/RockPaperScissors/App"
import Millionaire from "../games/Millionaire/App";

const Game = () => {
    const params = useParams();
    const switchGame = () => {
        switch (params.name) {
            case "TicTacToe":
                return <TicTacToe/>
            case "Game2048":
                return <Game2048/>
            case "Millionaire":
                return <Millionaire />
            case "MemoryGame":
                return <MemoryGame/>
            case "RockPaperScissors":
                return <RockPaperScissors/>
            case "TicTacToe2":
                return <TicTacToe2/>
            default:
                break
        }
    }
    return (
        <>
            {
                switchGame()
            }
        </>
    );
};

export default Game;
