import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import hamburgerIcon from '../../assets/more.png'; // vagy használj Unicode-ot vagy SVG-t

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  // Dropdown toggle (desktopon hover helyett kattintás mobilhoz)
  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      {/* Hamburger ikon mobilra */}
      <div className="hamburger" onClick={toggleMenu}>
        <img src={hamburgerIcon} alt="menu" />
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Kezdőlap</a></li>

        <li className="dropdown">
          {/* A href # kell, hogy a link ne navigáljon el */}
          <a href="#program" onClick={toggleDropdown} className="dropbtn">
            Szolgáltatások
          </a>
          {/* Dropdown tartalom */}
          <ul className={`dropdown-content ${dropdownOpen ? 'show' : ''}`}>
            <li><a href="#life-coaching" onClick={closeMenu}>Life Coaching</a></li>
            <li><a href="#business-coaching" onClick={closeMenu}>Business Coaching</a></li>
            <li><a href="#group-coaching" onClick={closeMenu}>Csoportos Coaching</a></li>
            <li><a href="#nutrition" onClick={closeMenu}>Táplálkozási Tanácsadás</a></li>
          </ul>
        </li>

        <li><a href="#about" onClick={closeMenu}>Rólunk</a></li>
        <li><a href="#gallery" onClick={closeMenu}>Események</a></li>
        <li><a href="#testimonials" onClick={closeMenu}>Áraink</a></li>
        <li><button className="btn" onClick={closeMenu}>Kapcsolat</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
