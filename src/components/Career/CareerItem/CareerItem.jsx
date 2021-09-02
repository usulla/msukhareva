import React from 'react';
import career_logo_gazprom from '../../../images/gazprom-media-logo5.png';
import career_logo_freelance from '../../../images/freelance_logo.png';

const CarrerItem = ({ id,
    title,
    positions,
    period,
    years,
    descriptin,
    alt }) => {

    function calcWorkPeriod(startDate, endDate) {
        startDate = new Date(startDate);
        endDate = endDate ? new Date(endDate) : new Date();
        var months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth() + 1;
        months += endDate.getMonth();
        let years = Math.round(months / 12);
        months = months % 12 <= 0 ? '' : Math.round(months % 12);
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
            {positions.map((position, index) => (
                <div className="career-item__position">
                    <div className='career-item__profession'>{position.profession}</div>
                    <div className='career-item__period'>{position.period}</div>
                    <div className='career-item__years'>{position.years === '' ? calcWorkPeriod('2021-06-01') : position.years}</div>
                    <div className='career-item__description'>
                        {position.descriptin.map((item_descr, index) => (
                            <p key={index}>{item_descr}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarrerItem;
