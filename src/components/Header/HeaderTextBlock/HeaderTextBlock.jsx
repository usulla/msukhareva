import React from 'react';
import './headertextcode.js';
import './headertextblock.scss';

const HeaderTextBlock = props => {
    const instagramApp = navigator.userAgent.includes("Instagram")
    const { title, name, profession_part1, profession_part2, description, description_mobile } = props;
    return (
        <div className={`header-item ${(window.innerWidth < 768 && instagramApp) && 'instagram'}`}>
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
                    <span className='h1__profession'>{profession_part1}</span><br />
                    <span className='h1__profession'>{profession_part2}</span>
                </div>
            </h1>
            <div className='animate-hidden'>
                <div className='header__description'>
                    <p className="desktop">{description}</p>
                    <p className="mobile">{description_mobile}</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderTextBlock;
