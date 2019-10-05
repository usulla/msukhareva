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
    function calcWorkPeriod (startDate, endDate){
        startDate = new Date(startDate);
        endDate = endDate ? new Date(endDate): new Date();
        var months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth() + 1;
        months += endDate.getMonth();
        years = Math.round(months/12);
        months = months%12 <=0 ? '': Math.round(months%12);
        return `${years} года ${months} месяцев`;
    }
    return (
        <div className='career-item'>
            <div className='career-item__logo'>
                <img
                    src={id === 1 ? career_logo_gazprom : career_logo_freelance}
                    alt={alt}
                />
            </div>
            <div className='career-item__title'>
                {title.map((item_title, index) => (
                    <span key={index}>
                        {item_title}
                        <br />
                    </span>
                ))}
            </div>
            <div className='career-item__profession'>{profession}</div>
            <div className='career-item__period'>{period}</div>
            <div className='career-item__years'>{years === '' ? calcWorkPeriod('2017-04-17') : years}</div>
            <div className='career-item__description'>
                {descriptin.map((item_descr, index) => (
                    <p key={index}>{item_descr}</p>
                ))}
            </div>
        </div>
    );
};

export default CarrerItem;
