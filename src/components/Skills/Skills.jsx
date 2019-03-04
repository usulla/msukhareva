import React from 'react';
import SkillsBlocks from './SkillsBlocks/SkillsBlocks.jsx';
import Cube from '../Cube/Cube.jsx';
import './skills.js';
import style from './skills.scss';

const Skills = ({ title, slillslist, cubeskills }) => {
    return (
        <article className='skills'>
            <div className='container'>
                <div className='animate-hidden'>
                    <h2>{title}</h2>
                </div>
                <div className='skills-content'>
                    <div className='skills-content__block'>
                        <SkillsBlocks list={[slillslist[0], slillslist[1]]} />
                        <SkillsBlocks
                            list={[slillslist[2], slillslist[3], slillslist[4]]}
                        />
                    </div>
                    <Cube cubeskills={cubeskills} />
                </div>
            </div>
        </article>
    );
};

export default Skills;
