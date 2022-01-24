import { AiFillHeart } from "react-icons/ai";
// styles
import styles from "./Footer.module.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
    <footer className={styles.footer}>
        <div className={styles.info}>
        <p className={styles.author}>
            © {currentYear}, React JS Group.
        </p>
        <p className={styles.created}>
          Created with{" "}
          <span>
            <AiFillHeart className={styles.heart} />
          </span>{" "}
        </p>
        </div>
    </footer>
    );
};

export default Footer;
