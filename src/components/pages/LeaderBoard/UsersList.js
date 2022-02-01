import Pagination from "./Pagination";

import styles from "./Leaderboard.module.css"

export const UsersList = ({game, data}) => {
    return (
        <>
            <ul className={styles.ul}>
                { 
                <>
                    <Pagination
                    game={game}
                    data={data}
                    pageLimit={6}
                    dataLimit={10}
                    />
                </>
                }
            </ul>
        </>
)}