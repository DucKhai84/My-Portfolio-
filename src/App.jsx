import { Route, Routes, BrowserRouter, useLocation } from "react-router-dom";
import { AnimatePresence, motion} from "framer-motion";

import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillPage from "./pages/SkillPage/SkillPage";

import './App.css'

function AnimatedRoutes(){
  const location = useLocation();

  return(
    <AnimatePresence mode= "wait">
      <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>}/>
          <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
          <Route path="/skill" element={<PageWrapper><SkillPage /></PageWrapper>} />
          <Route path="/blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
        </Routes>
    </AnimatePresence>

  )
}

function PageWrapper({children}){
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} 
      animate={{ opacity: 1, x: 0 }}   
      exit={{ opacity: 0, x: 100 }}        
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <AnimatedRoutes />
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
