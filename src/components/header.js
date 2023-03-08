import '../styles/header.css'
// import {NavLink} from 'react-router-dom';
import React from 'react';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Header() {
	const navRef = useRef(null);

	function showNavbar(){
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
    <header>
      <div className="logo-section">
        <h3>Logo</h3>
      </div>
      <div className="detail-section">
        <nav ref={navRef}>
          {/* 
          For NavLinks
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/course'>Courses</NavLink>
          <NavLink to='/about'>About</NavLink> */}
          <a href="/#">Home</a>
          <a href="/#">About</a>
          <a href="/#">Course</a>


          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
      </div>
      <div className="btn-section">
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default Header;