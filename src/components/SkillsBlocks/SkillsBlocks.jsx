import React from 'react';

const SkillsBlocks = ({list}) => {
    return (
        <div className="all-ul-skills-block">
            {list.map((item, index) => 
                <div key={index} className="all-ul-skills-block__item">
                    <span className={`skills-title skills-title--${item.classname}`}>{item.title}</span> 
                    <ul className={`${item.classname}`}>
                        {item.skills
                            .map((li, index) => 
                                <li key={index}>{ [li] }</li>
                            )
                        }
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SkillsBlocks;