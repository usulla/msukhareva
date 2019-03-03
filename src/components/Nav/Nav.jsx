import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to='blog' className='menu-ul__li'>Статьи</Link>
                </ul>
                <SocButtons />
            </div>
        </nav>
    );
};

export default Nav;
