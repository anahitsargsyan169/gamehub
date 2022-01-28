import styles from "./Leaderboard.module.css"

export const User = ({user,game}) => {
    return (
    <li className={styles.listItem}>
        <span className={styles.rankSpan}>{user.rank[game] == 0 ? <img className={styles.winner} src={"./win.png"} alt="avatar"></img> : `${user.rank[game]+1}.`}</span>
        <span className={styles.usernameSpan}><img src={user.src} alt="avatar"></img><p className={styles.username}>{user.username}</p></span>
        <span className={styles.pointsSpan}>{user.scores[game]}</span>
    </li>
    )
}