import {useState, useEffect} from "react";
import { fetchLeadersData } from "../../requests";
import Header from "../../layout/Header";
import styles from "./Leaderboard.module.css";
import { Table } from "./Table";

const Leaderboard = () => {
    const [leadersList, setLeadersList] = useState({});
    
    useEffect(()=>{
        fetch('./gamesData.json')
        .then((res) => res.json())
        .then((data) => {
            fetchLeadersData(data, setLeadersList);
        })
    },[]);

    return (
        <>
            <Header/>
            <div className={styles.leaderboard}>
                <div className={styles.leadHeader}>
                    <h2>Leaders</h2>
                </div>
                {leadersList && <Table data={leadersList} />}
            </div>
        </>
    )
}
export default Leaderboard;