import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'; 
import { Link } from 'react-scroll';
import menu_icon from './assets/menu-icon.png';

const Navbar = () => {
  const [tricky, setTricky] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setTricky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={`container ${tricky ? 'dark-nav' : ''}`}> 
      <div className="navbar">
        <div className="logo-big">
          <img src={logo} alt="Logo" className="logo" />
        </div>  
        <ul className={`nav-links ${toggle ? '' : 'hide-mobile-menu'}`}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-190} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-120} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-190} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-190} duration={500}>Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-190} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <div className="menu">
          <img src={menu_icon} alt='Menu Icon' className='menu-icon' onClick={toggleMenu} />
        </div>  
      </div>
    </nav>
  );
}

export default Navbar;
