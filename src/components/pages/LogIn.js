import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useAuthState } from "../context/AuthContext";

import { setUserSession } from '../storage';
import user from "../images/user.png";
import lock from "../images/lock.png";

import styles from "./LogIn.module.css";

function Login() {

    let history = useNavigate();
    const [isOpen, setIsOpen] = useState(true);
    const { userHasAuthenticated, setUser } = useAuthState();

    const LoginForm = ({isOpen, handleClick}) => {

        const [userName, setUserName] = useState("");
        const [password, setPassword] = useState("");
        const [isFailed, setIsFailed] = useState(false);
    
        function validateForm() {
            return userName.length > 3 && password.length > 3;
        }

        const checkData = (evt) => {
            fetch('https://mocki.io/v1/a2b86227-b103-4055-b233-67447e330617')
            .then((res) => res.json())
            .then((data) => {
                const users = [...data];
                const user = users.filter(user=> userName.toLowerCase() === user.username && password === user.password);
                if(user.length){
                    userHasAuthenticated(true);
                    setUser(user[0]);
                    setUserSession(user[0].id, user[0])
                    history('/profile');
                }else {
                    setUserName("");
                    setPassword("");
                    setIsFailed(true);

                }
            })
            .catch(error => {
                alert("Something went wrong. Please try again later.");
            });
        } 

        return (
        <div className={isOpen? `${styles.shown} ${styles.loginContainer}` : `${styles.loginContainer}`}>
            <div className={styles.login_form}>
                <div className={styles.login}>
                    <span className={styles.close_icon} onClick={(evt) => handleClick(evt)} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>
                    <div className={styles.login_field}>
                        <img src={user} className={styles.login_icon}></img>
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} className={styles.login_input} placeholder="Username" />
                    </div>
                    <div className={styles.login_field}>
                        <img src={lock}  className={styles.login_icon}></img>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.login_input} placeholder="Password" />
                    </div>
                    <button className={isFailed? `${styles.button_submit} ${styles.error}` : `${styles.button_submit}`} onClick={()=>checkData()} disabled={!validateForm()}>
                        <span className={styles.button_text}>Log In</span>
                        
                    </button>				
                </div>
            </div>
        </div>
        );
    };
    
    const closePopup = () => {
        setIsOpen(!isOpen);
        history('/');
    }
    return (
        <div className={styles.App}>
            {isOpen && <LoginForm isOpen={isOpen} handleClick={closePopup} />}
        </div>
    );
}

export default Login;
