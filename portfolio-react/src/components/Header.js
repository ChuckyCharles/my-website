import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{background: '#0a1623', border: 'none', boxShadow: 'none', position: 'sticky', top: 0, zIndex: 1000}}>
      <nav style={{maxWidth: '1400px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 0'}}>
        {/* Brand */}
        <div style={{flex: 1, textAlign: 'left'}}>
          <span style={{fontWeight: 700, fontSize: '2rem', color: '#7b8cff', letterSpacing: 1}}>Charles</span>
        </div>
        {/* Nav Links */}
        <ul style={{display: 'flex', gap: '48px', listStyle: 'none', flex: 2, justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0}}>
          <li><a href="#about-main" style={{color: '#fff', fontWeight: 400, fontSize: '1.15rem'}}>About</a></li>
          <li><a href="#projects" style={{color: '#fff', fontWeight: 400, fontSize: '1.15rem'}}>Projects</a></li>
          <li><a href="https://charlesochieng.hashnode.dev/" target="_blank" rel="noopener noreferrer" style={{color: '#fff', fontWeight: 400, fontSize: '1.15rem'}}>Blog</a></li>
          <li><a href="#contact" style={{color: '#fff', fontWeight: 400, fontSize: '1.15rem'}}>Contact</a></li>
        </ul>
        {/* Sun Icon */}
        <div style={{flex: 1, textAlign: 'right'}}>
      
        </div>
      </nav>
    </header>
  );
}

export default Header; 