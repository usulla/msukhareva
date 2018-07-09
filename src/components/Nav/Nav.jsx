import React from 'react';
import './nav.js';

const Nav = ({list}) => {
    return (
        <nav className='menu'>
            <div className='container'>
                <div className='logo'>Maria <span className="logo__lastname">Sukhareva</span></div>
                <ul className="menu-ul menu__menu-ul">
                    {list.map((li, index) => 
                        <li key={index} className="menu-ul__li">{li}</li>
                    )
                    }
                </ul>
                <div className='socicons header__socicons'>
                    <a className='socicons__icon socicons__icon--vk' href="https://vk.com/id37266155" rel="noopener noreferrer" target='_blank'><i className="fab fa-vk"></i></a>
                    <a className='socicons__icon socicons__icon--fb' href="http://www.facebook.com/mariia.sukhareva" rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a>
                </div>
            </div>
        </nav>
    );
};

export default Nav;