import { Link } from "react-router-dom";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.head_section}>
          
        <div className={styles.logo_div}>
          <Link  to="/">
            <img src="./img/icon.png" className={styles.gamehub_icon} alt="Logo"/>
          </Link>
          <h1 className={styles.pageName}>
            GameHub
          </h1>        
        </div>
        </div>
    );
};

export default Header;
