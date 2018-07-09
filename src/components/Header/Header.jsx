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
                        <HeaderTextBlock title="Привет!" name="Я Сухарева Мария," profession="Frontend-разработчик" description="Создание современных, шустрых веб-приложений - это и работа, и хобби, которое приносит удовольствие. Всегда в стремлении изучать новые технологии и писать красивый, чистый код."/>
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
