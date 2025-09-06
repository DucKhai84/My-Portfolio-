import { Route, Routes, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainLayout from './layouts/MainLayout/MainLayout';
import HomePage from "./pages/HomePage/HomePage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import SkillPage from "./pages/SkillPage/SkillPage";

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skill" element={<SkillPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App;
