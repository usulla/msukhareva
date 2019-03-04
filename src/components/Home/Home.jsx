import React, { Component } from 'react';
import Header from '../Header/Header.jsx';
import Skills from '../Skills/Skills.jsx';
import Education from '../Education/Education.jsx';
import Career from '../Career/Career.jsx';
import './home.js';
import appData from './appData.json';

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
