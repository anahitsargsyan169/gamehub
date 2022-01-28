import { useState } from "react";

import { useGamesContext } from "../../context/GamesContext";
import { UsersList } from "./List";
import styles from "./Leaderboard.module.css"

export const Table = ({data}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const {allGames} = useGamesContext();
    return (
        <>
            <div className={styles.filter}>
            <label htmlFor="games">Game:</label>
            <select
                defaultValue="Select Game"
                id="games"
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option disabled>Select Game</option>
                {allGames.map((game) => (
                <option key={game.id} value={game.path}>
                    {game.title}
                </option>
                ))}
            </select>
        </div>
        <div className={styles.board}>
            <div className={styles.table}>
                <div>
                <div className={styles.listHeader}>
                    <span className={styles.rankSpan}>#</span>
                    <span className={styles.usernameSpan}>Username:</span>
                    <span className={styles.pointsSpan}>Points:</span>
                </div>
                </div>
                { selectedCategory && <UsersList game={selectedCategory} data={data[selectedCategory]} /> }
            </div>
        </div>
        </>
    )
}
