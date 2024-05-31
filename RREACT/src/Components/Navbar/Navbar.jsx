import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false); 
    setIsDropdownOpen(false);  
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdownMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  function closeMenu() {
    document.querySelector('.nav-links').classList.remove('mobile-menu-open');
  }

  return (
    <section>
      <nav className="navbar">
        <div className="logo">
          <img src="./src/assets/logo.svg" alt="photo" />
          <span id='span'>Digital marketing agency</span>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          &#9776;
        </div>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <button className="close-menu-btn" id='button-cloes' onClick={closeMenu}>X</button>
            <li>
              <a
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
                onClick={() => handleClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className={activeLink === 'services' ? 'active' : ''}
                onClick={() => handleClick('services')}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={activeLink === 'portfolio' ? 'active' : ''}
                onClick={() => handleClick('portfolio')}
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#clients"
                className={activeLink === 'clients' ? 'active' : ''}
                onClick={() => handleClick('clients')}
              >
                Clients & Partners
              </a>
            </li>
            <li className="dropdown" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <a
                href="#about"
                className={`${activeLink === 'about' ? 'active' : ''}`}
                onClick={() => {
                  handleClick('about');
                  toggleDropdownMenu();
                }}
              >
                About Us <span className="dropdown-icon">{isDropdownOpen ? '⮝' : '⮟'}</span>
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#who" onClick={() => handleClick('who')}>Who & Why</a></li>
                  <li><a href="#internship" onClick={() => handleClick('internship')}>Internship</a></li>
                  <li><a href="#achievement" onClick={() => handleClick('achievement')}>Achievement</a></li>
                  <li><a href="#search" onClick={() => handleClick('search')}>Search for ID</a></li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="#contact"
                className={activeLink === 'contact' ? 'active' : ''}
                onClick={() => handleClick('contact')}
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
      </nav>
    </section>
  );
};

export default Navbar
