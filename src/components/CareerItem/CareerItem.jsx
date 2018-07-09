import React from 'react';
import career_logo_gazprom from '../../images/gazprom-media-logo5.png';
import career_logo_freelance from '../../images/freelance_logo.png';

const CarrerItem = ({listcareer}) => {
    return (
        <div className="career-item">   
            <div className="career-item__logo">
                <img src={listcareer.id === 1?career_logo_gazprom:career_logo_freelance} alt={listcareer.alt} />
            </div>
            <div className="career-item__title">
                {listcareer.title
                    .map(item => <span>{item}<br/></span>
                    )
                }
            </div>
            <div className="career-item__profession">
                {listcareer.profession}
            </div>
            <div className="career-item__period">
                {listcareer.period}
            </div>
            <div className="career-item__years">
                {listcareer.years}
            </div>
            <div className="career-item__description">
                {listcareer.descriptin
                    .map((item, index) => 
                        <p key={index}>{ item }</p>
                    )
                }
            </div>
        </div>
    );
};

export default CarrerItem;