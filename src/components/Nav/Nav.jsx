import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './nav.js';
import './nav.scss';
import Logo from '../Logo/Logo.jsx';
import SocButtons from '../SocButtons/SocButtons.jsx';

const Nav = ({ list }) => {
    const { t, i18n } = useTranslation();
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
                    {/*<li className='menu-ul__li'><Link to='blog'>Статьи</Link></li> */}
                </ul>
                <SocButtons />
            </div>
        </nav>
    );
};

export default Nav;
