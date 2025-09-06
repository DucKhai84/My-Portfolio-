import Header from "../../components/Navbar/NavbarComponent";
import Footer from "../../components/Footer/FooterComponent";


export default function MainLayout({children}){
    return(
       <div>
        <Header/>

        <main>
            {children}
        </main>

        <Footer />
       </div>
    )
}