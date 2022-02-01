
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import gamepad from "../images/gamepad.png";
import love from "../images/love.png";
import leaders from "../images/leaders.png";
import profile from "../images/profile.png";

import styles from "./MenuBar.module.css";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const container = useRef();
    const activeStyle = {
            border: "3px solid white",
            boxSizing: "border-box"
        };

    const handleClickOutside = e => {
        if (isOpen && !container.current.contains(e.target)) {
            setIsOpen(false);
        }
    };

    const handleChange = e => {
        setIsOpen(!isOpen);   
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    },[isOpen]);

    return (
        <>
            <input type="checkbox" id={styles.openmenu} checked={isOpen} onChange={handleChange} className={styles.hamburger_checkbox} />
            <div className={styles.hamburger_icon} ref={container}>
                <label htmlFor={styles.openmenu} id="hamburger_label">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>    
            </div>
            <div className={styles.menu_pane}>
            <nav className={styles.sidebar_navigation}>
                    
                        <NavLink to={"/profile"} className={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <img src={profile} className={styles.menuIcons}></img>
                            <div className={styles.title}>Profile</div>
                        </NavLink>
                    
                        <NavLink to="/" className={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <img src={gamepad} className={styles.menuIcons}></img>
                            <div className={styles.title}>Games</div>
                        </NavLink>
                    
                        <NavLink to="/favorites" className={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <img src={love} className={styles.menuIcons}></img>
                            <div className={styles.title}>Favorites</div>
                        </NavLink>
                    
                        <NavLink to="/leaderboard" className={styles.navLink} style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                            <img src={leaders} className={styles.menuIcons}></img>
                            <div className={styles.title}>Leaders</div>
                        </NavLink>
                        <div className={styles.background}></div>
                </nav>
        </div>
    </>
    );
};

export default Menu;
