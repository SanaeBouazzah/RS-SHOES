import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Menu = () => (
  <>
    <p><a href="#pricing">Pricing</a></p>
    <p><a href="#features">Features</a></p>
    <p><a href="#aboutus">Our Story</a></p>
    <p><a href="#possibility">Review</a></p>
    <p><a href="#blog">Blog</a></p>
  </>
)
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navbar'>
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <h2>RS-SHOES</h2>
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button' className='scale-down-center'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
              <div className='navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button' className='scale-down-center'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;
