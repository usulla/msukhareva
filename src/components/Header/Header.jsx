import React from 'react';
import myphoto from '../../images/me-f-black.png';
import Nav from '../Nav/Nav.jsx';
import ToggleMenu from '../ToggleMenu/ToggleMenu.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import HeaderTextBlock from './HeaderTextBlock/HeaderTextBlock.jsx';

const Header = ({ navtitle, h1_text, alt }) => {
    return (
        <header className='header'>
            <Nav list={navtitle} />
            <ToggleMenu />
            <MobileMenu list={navtitle} />
            <div className='header__content'>
                <div className='header__half header__half--redblock'>
                    <HeaderTextBlock {...h1_text} />
                </div>
                <div className='header__half header__half--whiteblock'>
                    <div className='header-item header__photo'>
                        <img className='myphoto-img' src={myphoto} alt={alt} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
