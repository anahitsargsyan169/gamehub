import { Link } from 'react-router-dom';

import styles from "./Score.module.css"

export const Score = ({user,game}) => {
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