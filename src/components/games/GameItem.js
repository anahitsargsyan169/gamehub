import { useContext } from "react";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";

// styles
import styles from "./GameItem.module.css";

 import { FavoritesContext } from "../context/FavoritesContext";

const GameItem = ({ info }) => {
     const { addToFavorite, gameIsFavorite } = useContext(FavoritesContext);

    return (
    <div className={styles.card}>
        <Link to={`/games/${info.path}`} className={styles.card_header}>
        <img className={styles.thumbnail} src={info.src} alt="test" />
        </Link>
        <div className={styles.card_body}>
        <Link to={`/games/${info.id}`} className={styles.game_title}>
            {info.title}
        </Link>
        <div className={styles.card_footer}>
            <button
            onClick={() => {console.log(info);addToFavorite(info)}}
            className={styles.btn}
            title={
                gameIsFavorite(info.id)
                ? "Remove from favorites"
                : "Add to favorites"
            }
            >
            <AiFillHeart
                className={styles.heart_icon}
                style={{ color: gameIsFavorite(info.id) ? "red" : "#aaaaaa" }}
            />
            </button>
            </div>
        </div>
        </div>
    );
};

export default GameItem;
