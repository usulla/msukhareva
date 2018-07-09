import React from 'react';
import './mobilemenu.js';

const MobileMenu = ({list}) => {
    return (
        <div className="mobile-menu">
            <div className="mobile-menu-inner">
                <ul>
                    {list.map((li, index) => 
                        <li key={index}>{li}</li>
                    )
                    }
                </ul>
                <div className="mobile-menu__close"></div>
            </div>
            <div className="mobile-menu__bg"></div>
        </div>
    );
};

export default MobileMenu;