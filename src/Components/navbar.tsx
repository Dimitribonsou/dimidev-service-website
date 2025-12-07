import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../App';
import './Style/navbar.scss';
import logo_dimidev from '../assets/logo_dimidev.png';
import { FaFacebookF, FaWhatsapp, FaPaperPlane, FaEnvelope, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#competences' },
    { name: 'Services', href: '#services' },
    { name: 'Projets', href: '#projets' },
    { name: 'Contact', href: '#contact' },
    // { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#home" className="logo-link">
          <img src={logo_dimidev} alt="Dimidev Logo" className="logo" />
        </a>

        <button 
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <FaBars />
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
        <div className="nav-contact hidden md:block">
            <a href="https://wa.me/237674606328" className="btn-contact">
                  Me Contacter
            </a>
        </div>
        {/* <div className="social-links">
          <a
            href="https://wa.me/674606328"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://web.facebook.com/profile.php?id=61571160665639"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://t.me/dimidev237"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Telegram"
          >
            <FaPaperPlane />
          </a>
          <a
            href="mailto:dimitribonsou26@gmail.com"
            className="social-link"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
