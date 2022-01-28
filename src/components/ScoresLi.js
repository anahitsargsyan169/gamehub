import styles from "./ScoresLi.module.css"
import { Link } from 'react-router-dom';

export const Score = ({user,game}) => {
    console.log(user)
    return (
        <li className={styles.listItem}>
            <span className={styles.gameSpan}>
                <Link to={`/games/${game.path}`} >
                    <img src={game.src} alt="game"></img>
                </Link>
                    <p className={styles.game}>{game.title}</p></span>
            <span className={styles.pointsSpan}>{user.scores[game.path]}</span>
        </li>
    )
}