import GameItem from "./GameItem";

import styles from "./GameList.module.css";

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
