import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";
import styles from './SunMoon.module.css';

export default function SunMoonComponent() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (storedTheme === 'dark' || (!storedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, []);

    const toggleTheme = () => {
        setIsChanging(true);
        
        setTimeout(() => {
            if (isDarkMode) {
                document.documentElement.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                setIsDarkMode(false);
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                setIsDarkMode(true);
            }
            
            // Reset animation class
            setTimeout(() => setIsChanging(false), 100);
        }, 150);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={`${styles.icons} ${isChanging ? styles.changing : ''}`}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
            {isDarkMode ? (
                <FaSun 
                    className={styles.themeToggle} 
                    color="#FFD700" 
                    size={22} 
                />
            ) : (
                <FaMoon 
                    className={styles.themeToggle} 
                    color="#6c757d" 
                    size={22} 
                />
            )}
        </button>
    );
}