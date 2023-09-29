import React from 'react';
// importing icons..can prob change inmage after
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlinesRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => (
  <nav className="app__navbar">
    <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo"/>
      </div>
      {/* unordered list */}
      <ul className = "app_navbar-links">
        {/* setting font for this paragraph */}
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        {/* <li className="p_opensans"><a href="#home">Home</a></li> */}
        {/* <li className="p_opensans"><a href="#home">Home</a></li> */}
      </ul>
  </nav>
);

export default Navbar;
