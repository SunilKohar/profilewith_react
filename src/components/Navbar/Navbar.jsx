import './Navbar.css';
import { useState } from "react";
import { getImageUrl } from "../../utils";
import Logo from '../../assets/nav/sunilkohar-logo.png';
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className='navbar-main'>
            <a href="/" className='title'><img src={Logo} alt='Sunil Kohar' /> </a>
            <div className='menu'>
                <img
                    className='menuBtn'
                    src={
                        menuOpen
                            ? getImageUrl("nav/closeIcon.png")
                            : getImageUrl("nav/menuIcon.png")
                    }
                    alt="menu-button"
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <ul className={`menuItems ${menuOpen && menuOpen}`}
                    onClick={() => setMenuOpen(false)}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#experience">Experience</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}