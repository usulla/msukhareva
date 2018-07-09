import React from 'react';
import myphoto_bmstu from '../../images/me_bmstu2.jpg';
import myphoto_bmstu2 from '../../images/me_bmstu2black.jpg';
import mgtu_logo from '../../images/mgtu_logo.png';

const Education = ({listeducation}) => {
    return (
        <article className='education'>
            <div className='container'>
                <div className='animate-hidden'>
                    <h2>Образование</h2>
                </div>
                <div className='education__content'>
                    <div className='education__photo education__item'>
                        <img src={myphoto_bmstu2} alt='Frontend-разработчик Сухарева Мария' />
                    </div>
                    <div className="education__info">
                        <img className="logoMgtu" src={mgtu_logo} alt='Frontend-разработчик Сухарева Мария' />
                        <div className="years">{listeducation.years}</div>
                        <div className="university">
                            {listeducation.university
                                .map(item => <span>{item}<br/></span>
                                )
                            }
                        </div>
                        <div className="faculty">{listeducation.faculty}</div>
                        <div className="specialty">{listeducation.specialty}</div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default Education;
