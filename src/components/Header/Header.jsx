import React, { Component } from 'react';
import myphoto from '../../images/me-f-black.png';
import Nav from '../Nav/Nav.jsx';
import ToggleMenu from '../ToggleMenu/ToggleMenu.jsx';
import MobileMenu from '../MobileMenu/MobileMenu.jsx';
import HeaderTextBlock from '../HeaderTextBlock/HeaderTextBlock.jsx';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <Nav list={['Обо мне','Что я умею','Образование','Карьера']}/>
                <ToggleMenu/>
                <MobileMenu list={['Обо мне','Что я умею','Образование','Карьера']}/>
                <div className='header__content'>
                    <div className='header__half header__half--redblock'>
                        <HeaderTextBlock title="Привет!" name="Я Сухарева Мария," profession="Frontend-разработчик" description="Не следует, однако забывать, что постоянный количественный рост и сфера нашей активности обеспечивает широкому кругу (специалистов) участие в формировании форм развития."/>
                    </div>
                    <div className='header__half header__half--whiteblock'>
                        <div className='header-item header__photo'>
                            <img className="myphoto-img" src={myphoto} alt='Frontend-разработчик Сухарева Мария' />
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
