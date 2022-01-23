import styles from "./Profile.module.css";
import { useAuthState } from "../context/context";
import {useNavigate} from "react-router-dom"
import { getUser, removeUserSession } from "../storage";

const Profile = () => {
    const {userHasAuthenticated, setUser} = useAuthState();
    const user = getUser();
    console.log(user);
    let history = useNavigate();

    const handleLogOut = () => {
        userHasAuthenticated(false);
        setUser(undefined);
        removeUserSession();
        history('/login');
    }

    return (
        <>
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
                            <h6>Username</h6>
                            <p>{user.username}</p>
                        <hr/>
                            <h6>E_mail</h6>
                            <p>{user.email}</p>
                        <hr/>
                            <h6>Birth</h6>
                            <p>{user.birth}</p>
                        <hr/>
                            <h6>Account created at:</h6>
                            <p>{user.createdAt}</p>
                    </div>
                    <div className={styles.score_info}>

                    </div>
                </div>
        </div>
        </>
    );
};

export default Profile;