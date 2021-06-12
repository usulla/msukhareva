import React from 'react';

const SocButtons = () => {
    return (
        <div className='socicons header__socicons'>
            <a
                className='socicons__icon socicons__icon--github'
                href='https://github.com/usulla'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fab fa-github' />
            </a>
            <a
                className='socicons__icon socicons__icon--fb'
                href='http://www.facebook.com/mariia.sukhareva'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fab fa-facebook-f' />
            </a>
            <a
                className='socicons__icon socicons__icon--fb'
                href='https://www.instagram.com/maria_suxareva'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fab fa-instagram' />
            </a>
            <a
                className='socicons__icon socicons__icon--in'
                href='https://www.linkedin.com/in/maria-sukhareva-88b6029a/'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fab fa-linkedin' />
            </a>
            
            {/* <a
                className='socicons__icon socicons__icon--vk'
                href='https://vk.com/id37266155'
                rel='noopener noreferrer'
                target='_blank'>
                <i className='fab fa-vk' />
            </a> */}
        </div>
    );
};

export default SocButtons;
