import React, {useState} from 'react';
import '../Styles/navbar.css'
import logo from '../Assets/images/pocket-logo-two.png';
import logoWhite from '../Assets/images/pocket-logo-four.png';
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHovered, setIsHovered] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <a href="/" className='logo'>
      <div className='logo'>
      <img 
        data-aos='fade-in' 
        src={isHovered ? logoWhite : logo} 
        alt='logo' 
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      /> 
      </div>
      </a>
      <button className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </button>
    <div className={`links ${isOpen ? 'open' : 'closed'}`}>
  
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/about">Resources</a></li>
            <li className='login'><a href="/"><FaSignInAlt /></a></li>
          </ul>
      </div>
      <div className='account'></div>
    </nav>
  );
}

export default Navbar;