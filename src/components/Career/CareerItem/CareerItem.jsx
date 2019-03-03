import React from 'react';
import career_logo_gazprom from '../../../images/gazprom-media-logo5.png';
import career_logo_freelance from '../../../images/freelance_logo.png';

const CarrerItem = ({
    id,
    title,
    profession,
    period,
    years,
    descriptin,
    alt
}) => {
    return (
        <div className='career-item'>
            <div className='career-item__logo'>
                <img
                    src={id === 1 ? career_logo_gazprom : career_logo_freelance}
                    alt={alt}
                />
            </div>
            <div className='career-item__title'>
                {title.map(item_title => (
                    <span>
                        {item_title}
                        <br />
                    </span>
                ))}
            </div>
            <div className='career-item__profession'>{profession}</div>
            <div className='career-item__period'>{period}</div>
            <div className='career-item__years'>{years}</div>
            <div className='career-item__description'>
                {descriptin.map((item_descr, index) => (
                    <p key={index}>{item_descr}</p>
                ))}
            </div>
        </div>
    );
};

export default CarrerItem;
