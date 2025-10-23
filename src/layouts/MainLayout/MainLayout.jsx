import Header from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/FooterComponent";
import styles from "./MainLayout.module.css"


export default function MainLayout({children}){
    return(
       <div className="h-100">
        <Header/>
        <main className={`container d-flex align-items-center justify-content-center ${styles.main_wrap}`}>
            {children}
        </main>
       </div>
    )
}