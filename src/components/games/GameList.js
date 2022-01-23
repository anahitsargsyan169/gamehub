// styles
import styles from "./GameList.module.css";
import GameItem from "./GameItem";

const GameList = ({ games }) => {
    return (
    <div className={styles.grid}>
        {games.map((game) => (
        <GameItem key={game.id} info={game} />
        ))}
    </div>
    );
};

export default GameList;
