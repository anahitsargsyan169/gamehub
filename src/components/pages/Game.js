import { useParams } from "react-router-dom";
import TicTacToe from "../games/TicTacToe/App";
import styles from "./Game.module.css";

const Game = () => {
    const params = useParams();

    return (
        <>
            <TicTacToe />
        </>
    );
};

export default Game;
