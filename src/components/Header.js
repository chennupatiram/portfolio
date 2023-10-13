import React from 'react';
import './header.css';
import headerImage from './ram.jpg'; 

function Header() {
  return (
    <header className="header">
      
    
    <div className="header-content">
        <img src={headerImage} alt="Header Image" className="header-image" />
        <h1 className="header-name">Chennupati Venkata Ram </h1>
      </div>
      <h3 >I am third year senior at vellore institute of technology(VIT) in Amaravathi <br/>
        ,Currently pursuing 
        CSE specialization in Artificial Inteligence and Machine Learing.
        Enjoys reading Books,browsing internet,listening music,playing Games.<br/>
        I am a self motivating ,Honest and Straight forward person.

      </h3>
    </header>
  );
}

export default Header;