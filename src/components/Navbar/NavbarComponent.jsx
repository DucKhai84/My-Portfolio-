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
                        <Link className={`mx-3 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/">Trang chủ</Link>
                        <Link className={`mx-3 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/about">Giới thiệu</Link>
                        <Link className={`mx-3 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/skill">Kỹ năng</Link>
                        <Link className={`mx-3 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/project">Dự án</Link>
                        <Link className={`mx-3 ${styles.navbarItems} ${styles.navbarItems_link}`} to="/blog">Bài viết</Link>
                    </ul>
                </nav>
            </div>
            <Icons/>
        </header>
    )
}   