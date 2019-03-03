import React from 'react';
import './headertextcode.js';

const HeaderTextBlock = props => {
    const { title, name, profession, description } = props;
    return (
        <div className='header-item'>
            <div className='hidden-code hidden-code--code1'>
                <div className='hidden-code__code-text animate-code1'>
                    {'</code>'.toString()}
                </div>
            </div>
            <div className='hidden-code hidden-code--code2'>
                <div className='hidden-code__code-text animate-code2'>
                    {'</code>'.toString()}
                </div>
            </div>
            <h1 className='h1'>
                <span className='h1__hello'>{title}</span>
                <div className='animate-hidden'>
                    <span className='h1__myname'>{name}</span>
                </div>
                <div className='animate-hidden'>
                    <span className='h1__profession'>{profession}</span>
                </div>
            </h1>
            <div className='animate-hidden'>
                <div className='header__description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTextBlock;
