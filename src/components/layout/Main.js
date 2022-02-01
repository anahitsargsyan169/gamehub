import Footer from "./Footer";
import MenuBar from "./MenuBar";

import styles from "./Main.css";

const Layout = ({children}) => {
    return (
    <>

        <MenuBar />
        <main className={styles.main_container}>{children}</main>
        <Footer />
    </>
    );
};

export default Layout;
