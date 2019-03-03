import React from 'react';
import './nav.js';
import Logo from '../Logo/Logo.jsx';
import SocButtons from '../SocButtons/SocButtons.jsx';

const Nav = ({ list }) => {
    return (
        <nav className='menu'>
            <div className='container'>
                <Logo />
                <ul className='menu-ul menu__menu-ul'>
                    {list.map((li, index) => (
                        <li key={index} className='menu-ul__li'>
                            {li}
                        </li>
                    ))}
                </ul>
                <SocButtons />
            </div>
        </nav>
    );
};

export default Nav;
