import React from 'react';
import './header.css';
import sneakers from '../../assets/sneakers.png';

const Header = () => {
  return (
    <div className='header section__padding' id='pricing'>
      <div className='header-content'>
        <h1 className='gradient_text'>
          Comfort And Magic New Sneakers
        </h1>
        <div className="para">
          <p>Lorem ipsum dolor
            sit amet consectetur
            adipisicing elit. Animi
            illo deserunt repudiandae
            sequi perspiciatis commodi?
            Lorem ipsum dolor sit
            amet consectetur,
            adipisicing elit. Dolorem, facere!
          </p>
        </div>
        <div className='header-content-input'>
          <button className='gradient__bg bounce-in-top '>Get Started</button>
        </div>
        <div className='header-content_container'>
          <div className='discount'>
            <p>20%<br/>Discount</p>
          </div>
          <div className='header-content__sneakers'>
            <img src={sneakers} alt="sneakers" />
          </div>
          <div className='header-content_options'>
            <div className='pic slide-in-blurred-tr'>
              <div className="image">
                <img src={sneakers} alt="sneakers" />
              </div>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className='pic slide-in-blurred-tr'>
              <div className="image">
                <img src={sneakers} alt="sneakers" />
              </div>
              <p>Lorem ipsum dolor</p>
            </div>
            <div className='pic slide-in-blurred-tr'>
              <div className="image">
                <img src={sneakers} alt="sneakers" />
              </div>
              <p>Lorem ipsum dolor</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
