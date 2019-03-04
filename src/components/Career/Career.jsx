import React from 'react';
import CareerItem from './CareerItem/CareerItem.jsx';
import style from './career.scss';

const Career = ({ title, careerList }) => {
    return (
        <article className='career'>
            <div className='container'>
                <div className='animate-hidden'>
                    <h2>{title}</h2>
                </div>
                <div className='career__content'>
                    <div className='career__center'>
                        {careerList.map((list, index) => (
                            <CareerItem key={index} {...list} />
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Career;
