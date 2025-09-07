import { Link } from "react-router-dom";
import Icons from "../../components/SunMoonIcon/Sun&MoonComponent";
import styles from './Navbar.module.css';
export default function Header() {
    return (
        <header id={`${styles.header}`}>
            <div className="container h-100">
                <nav className={`d-flex justify-content-between ${styles.navbar}`}>
                    <div className={`h-100 d-flex align-items-center`}>
                        <Link to="/" className={`${styles.headerName}`}>Portfolio</Link>
                    </div>
                    <ul className={`d-flex justify-content-center align-items-center ${styles.navbarLists}`}>
                        <Link className={`mx-2 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/">Home</Link>
                        {/* <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/">Home</Link>
                        </li> */}
                        <Link className={`mx-2 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/about">About</Link>
                        <Link className={`mx-2 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/skill">Skills</Link>
                        <Link className={`mx-2 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/project">Projects</Link>
                        <Link className={`mx-2 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/blog">Blogs</Link>
                    </ul>
                </nav>
            </div>
            <Icons/>
        </header>
    )
}   