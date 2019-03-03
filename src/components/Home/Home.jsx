import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.jsx';
import appData from './appData.json';
import Skills from '../Skills/Skills.jsx';
import Education from '../Education/Education.jsx';
import Career from '../Career/Career.jsx';
import './home.js';

class Home extends Component {
    render() {
        const { dataHeader, dataSkills, dataEducation, dataCareer } = appData;
        return (
            <div className='home'>
                <Header {...dataHeader} />
                <Skills {...dataSkills} />
                <Education {...dataEducation} />
                <Career {...dataCareer} />
            </div>
        );
    }
}

export default Home;
