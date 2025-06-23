import { useState } from 'react';
import styles from './header.module.css'

const Header = ({ setCurrentPage }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNavClick = (page) => {
        setCurrentPage(page);
        setMenuOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>House of Flowers</div>

       

    <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
        <a href="#" onClick={() => handleNavClick("home")}>Home</a>
        <a href="#" onClick={() => handleNavClick("flowers")}>Flowers</a>
        <a href="#" onClick={() => handleNavClick("about")}>About</a>
    </nav>

    <button className={styles.burger} onClick={() => setMenuOpen(!menuOpen)}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
    </button>
    </header>
    )
}

export default Header