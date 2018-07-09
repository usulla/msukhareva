import React from 'react';
import CareerItem from '../CareerItem/CareerItem.jsx';

const Career = ({listcareer, title}) => {
    return (
        <article className='career'>
            <div className='container'>
                <div className='animate-hidden'>
                    <h2>{title}</h2>
                </div>
                <div className='career__content'>
                    <div className="career__center">
                     {listcareer
                        .map((list, index) => 
                        <CareerItem key={index} listcareer={list}/>
                    )
                    }
                        
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Career;