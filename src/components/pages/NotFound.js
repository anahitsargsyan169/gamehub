import { NavLink } from "react-router-dom";
import Header from "../layout/Header";

import styles from "./NotFound.module.css";

const NotFound = () => {
    return (
        <>
    <Header />
    <section className={styles.not_found}>
        <h1 className="title">404 - Page Not Found</h1>
        {<NavLink to="/" className={styles.link}>
        Back to Homepage
        </NavLink>}
    </section>
    </>
    );
    
};

export default NotFound;
