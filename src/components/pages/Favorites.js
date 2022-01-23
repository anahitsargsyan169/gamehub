import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import GameList from "../games/GameList";

// styles
import styles from "./Favorites.module.css";

const Favorites = () => {
    const { favorites, totalFavorites } = useContext(FavoritesContext);

    return (
    <section className={styles.favorite}>
        <div className="text-center">
        <h1 className="title">Your Favorite Games</h1>
        </div>
        {totalFavorites === 0 ? (
        <p className={styles.feedback}>No favorite games yet!</p>
        ) : (
        <GameList games={favorites} />
        )}
    </section>
    );
};

export default Favorites;
