import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from '../Header/Header.jsx';
// import dataSkills from '../../data/dataskills.js';
import Skills from '../Skills/Skills.jsx';
import Education from '../Education/Education.jsx';
import Career from '../Career/Career.jsx';
import './home.js';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <Header/>
                <Skills listskills={dataSkills} title="Что я умею"/>
                <Education listeducation={dataEducation} title="Образование"/>
                <Career listcareer={dataCareer} title="Опыт работы"/>
            </div>
        );
    }
}

const dataSkills = [{
        'title': 'На отлично',
        'classname': 'perfectly',
        'skills': ['HTML5', 'CSS3', 'JQuery', 'SASS', 'LESS', 'Bootstrap', 'AJAX']
    },
    {
        'title': 'Уверенно',
        'classname': 'basic',
        'skills': ['JavaScript', 'ES6']
    },
    {
        'title': 'Осваиваю',
        'classname': 'studying',
        'skills': ['React']
    },
    {
        'title': 'Основы',
        'classname': 'primary',
        'skills': ['PHP', 'MySQL']
    },
    {
        'title': 'Использую',
        'classname': 'apply',
        'skills': ['Git', 'Gulp', 'Webpack', 'БЭМ', 'Photoshop', 'Scetch']
    }
]
const dataEducation = {
        'years': '2009 -2015 г.',
        'university': ['Московский государственный', 'технический университет', 'им. Н.Э. Баумана'],
        'faculty': 'Факультет робототехники и комплексной автоматизации',
        'specialty':'Системы автоматизированного проектирования'
    }

const dataCareer = [{
        'id': 1,
        'alt': 'Frontend-разработчик Сухарева Мария',
        'title': ['Газпром-Медиа','Развлекательное Телевидение'],
        'profession': 'Frontend-разработчик',
        'period': 'Апрель 2017 — по настоящее время',
        'years': '1 год 3 месяца',
        'descriptin': ['Разработка, верстка и поддержка фронтенда новых сервисов компании с нуля и поддержка существующих.', 'Работая в этой компании кроме хорошего профессионального опыта, приобрела больше опыта командной работы, взаимодействуя с дизайнерами, backend специалистами и менеджерами проектов.']
    },
    {   'id': 2,
        'alt': 'Frontend-разработчик Сухарева Мария',
        'title': ['Фриланс','Индивидуальное предпринимательство'],
        'profession': 'Веб-разработчик',
        'pariod': 'Апрель 2013 — апрель 2017',
        'years': '4 года 1 месяц',
        'descriptin': ['Во время обучения в МГТУ им.Баумана начала работать как фрилансер, создавая первое время простые сайты, а затем уже интернет-магазины "под ключ".','Постоянное сотрудничество с удаленными back-end специалистами.']
    }
]
export default Home;