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
        </div>
    </footer>
    );
};

export default Footer;
