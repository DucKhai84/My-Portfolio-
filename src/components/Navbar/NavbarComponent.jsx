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
                        <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/">Home</Link>
                        </li>
                        <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/about">About</Link>
                        </li>
                        <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/skill">Skills</Link>
                        </li>
                        <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/project">Project</Link>
                        </li>
                        <li className={`mx-2 ${styles.navbarItems}`}>
                            <Link className={styles.navbarItems_link} to="/blog">Blog</Link>
                        </li>
                        {/* <li onClick={onToggle} className={`mx-2 } ${styles.navbarItems}`}>
                            {!theme ? (
                                <FaMoon className={`${styles.themeToggle}`} color="#6c757d" size={20} /> 
                            ) : (
                                <FaSun className={`${styles.themeToggle}`} color="#FFD700" size={20} /> 
                            )}
                        </li> */}
                    </ul>
                </nav>
            </div>
            <Icons/>
        </header>
    )
}   