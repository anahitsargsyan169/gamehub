import {useState, useEffect} from "react";

import Header from "../../layout/Header";
import { Board } from "./Board";

import styles from "./Leaderboard.module.css";

const Leaderboard = () => {
    const [leadersList, setLeadersList] = useState({});

    useEffect(()=>{
        fetch('https://mocki.io/v1/f71bd5dd-956c-4431-8a4c-9e6d482072ef')
        .then((res) => res.json())
        .then((games) => {
            fetch('https://mocki.io/v1/687855a7-7323-470b-bec3-6587c4a087ee')
            .then((res)=> res.json())
            .then((data)=>{
                let scores = {};
                games.map(game => {
                    let filteredScores = {};
                    filteredScores[game.path] = data.filter((user) => user.scores[game.path] != 0);
                    scores[game.path] = filteredScores[game.path].sort((a, b) => b.scores[game.path] - a.scores[game.path]);
                    scores[game.path].forEach((user, index)=> {
                        if(!user.rank) user.rank = {};
                        user.rank[game.path] = index})
                });
                setLeadersList(scores);
            })
            .catch(error => {
                alert("Something went wrong. Please try again later.");
            });
        })
        .catch(error => {
            alert("Something went wrong. Please try again later.");
        });
    },[]);

    return (
        <>
            <Header/>
            <div className={styles.leaderboard}>
                <div className={styles.leadHeader}>
                    <h2>Leaders</h2>
                </div>
                <Board data={leadersList} />
            </div>
        </>
    )
}
export default Leaderboard;