import React from 'react';
import SkillsBlocks from '../SkillsBlocks/SkillsBlocks.jsx';
import Cube from '../Cube/Cube.jsx';
import './skills.js';

const Skills = ({title, listskills}) => {
    return (
        <article className='skills'>
            <div className='container'>
                <div className='animate-hidden'>
                    <h2>{title}</h2>
                </div>
                <div className='skills-content'>
                    <div class="skills-content__block">
                        <SkillsBlocks list={[listskills[0], listskills[1]]} />
                        <SkillsBlocks list={[listskills[2], listskills[3], listskills[4]]} />
                    </div>
                    <Cube/>
                </div>
            </div>
        </article>
    );
};

export default Skills;
