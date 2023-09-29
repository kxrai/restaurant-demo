import React from 'react';
// importing icons..can prob change inmage after
import { GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlinesRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './IchirakuLogo.css';


const Ichiraku = () => {
const imageStyle = {
    width: '300', // Set your desired width
    height: '300', // Maintain aspect ratio
};

return (
    <div>
    <img
        src={images.ichiraku} 
        alt="app logo"
        style={imageStyle}
    />
    </div>
);
};

export default Ichiraku;