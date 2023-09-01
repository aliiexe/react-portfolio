import './Header.css';
import aliLogo from '/aliLogo.png';
import { Link } from 'react-scroll';

function Navbar() {
    function toggleMenu() {
        const navi = document.querySelector('.navi');
        navi.classList.toggle('open');
    }

    function closeMenu() {
        const navi = document.querySelector('.navi');
        navi.classList.remove('open');
    }

    return (
        <header>
            <div className="image">
                <img src={aliLogo} alt="Logo" />
            </div>
            <nav className="navi">
                <ul>
                    <li><Link to="hero" smooth={true} duration={1000} onClick={closeMenu}>About</Link></li>
                    <li><Link to="skills" smooth={true} duration={1000} onClick={closeMenu}>Skills</Link></li>
                    <li><Link to="projects" smooth={true} duration={1000} onClick={closeMenu}>Projects</Link></li>
                    <li><Link to="services" smooth={true} duration={1000} onClick={closeMenu}>Services</Link></li>
                </ul>
            </nav>
            <button className="menu-icon" onClick={toggleMenu}>&#9776;</button>
            <button className="contact-button"><Link to="contact" smooth={true} duration={1000} onClick={closeMenu}>Contact me</Link></button>
        </header>
    );
}

export default Navbar;
