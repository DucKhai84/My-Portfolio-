import Header from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/FooterComponent";
import styles from "./MainLayout.module.css"


export default function MainLayout({children}){
    return(
       <div>
        <Header/>
        <main className={`container my-3 ${styles.main_wrap}`}>
            {children}
        </main>
       </div>
    )
}