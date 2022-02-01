import {useNavigate} from "react-router-dom"
import { useAuthState } from "../../context/AuthContext";
import { useGamesContext } from "../../context/GamesContext";

import { getUser, removeUserSession } from "../../storage";
import Header from "../../layout/Header";
import { Score } from "./Score";

import styles from "./Profile.module.css";

const Profile = () => {
    const {userHasAuthenticated, setUser} = useAuthState();
    const { allGames } = useGamesContext();
    const user = getUser();
    let history = useNavigate();

    const handleLogOut = () => {
        userHasAuthenticated(false);
        setUser(undefined);
        removeUserSession();
        history('/login');
    }

    return (
        <>
        <Header/>
        <div className={styles.profile_container}>
                <div className={styles.profile_card}>
                    <div className={styles.profile_card_body}>
                        <img src={user.avatar} alt="Avatar" className={styles.rounded_circle} />
                            <p className={styles.name_info}> {user.name} </p>
                            <button className={styles.button_logout} onClick={()=> handleLogOut()}>
                                <span className={styles.button_text}>Log Out</span>
                            </button>	
                    </div>
                </div>
                <div className={styles.profile_info}>
                    <div className={styles.profile_info_body}>
                            <h6>Username:</h6>
                            <p>{user.username}</p>
                        <hr/>
                            <h6>E-mail:</h6>
                            <p>{user.email}</p>
                        <hr/>
                            <h6>Birth:</h6>
                            <p>{user.birth}</p>
                        <hr/>
                            <h6>Account created at:</h6>
                            <p>{user.createdAt}</p>
                    </div>
                    <div className={styles.score_info}>
                        <h3>Scores</h3>
                        <div>
                        <ul>
                            {
                                allGames.map((game)=>
                                    <Score key={game.id} game={game} user={user} />
                                )
                            }
                        </ul>
                        </div>
                    </div>
                </div>
        </div>
        </>
    );
};

export default Profile;
