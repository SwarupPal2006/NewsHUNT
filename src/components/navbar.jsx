import { useState } from 'react';
import '../style/navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  return (
    <div className='navbar'>
      <h3>News<span className="hunt">HUNT</span></h3>
      <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? (
            <i className="fas fa-times"></i> 
          ) : (
            <i className="fas fa-bars"></i> 
          )}
        </button>
      <div className={`nav_link ${isOpen ? 'open' : ''}`}>
          <li><Link to="/" onClick={closeMenu}><i className="fas fa-home"></i> Home</Link></li>
          <li><Link to="/newsboard" onClick={closeMenu}><i className="fas fa-globe"></i> Category</Link></li>
          <li><Link to="/summarized" onClick={closeMenu}><i className="fas fa-file-alt"></i> My Summaries</Link></li>
          <li><Link to="/about" onClick={closeMenu}><i className="fas fa-info-circle"></i> About</Link></li>
      </div>
  
    </div>
  );
};

export default Navbar;