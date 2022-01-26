// styles
import styles from "./Header.module.css";

const Header = () => {
    return (
        <div className={styles.head_section}>
        <div className={styles.logo_div}>
          <img src="./icon.png" className={styles.gamehub_icon} />
          <h1 className={styles.pageName}>
            GameHub
          </h1>        
        </div>
        </div>
    );
};

export default Header;
