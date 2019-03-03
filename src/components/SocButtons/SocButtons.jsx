import React, { Component } from 'react';

class SocButtons extends Component {
    render() {
        return (
          <div className='socicons header__socicons'>
                    <a className='socicons__icon socicons__icon--vk' href="https://vk.com/id37266155" rel="noopener noreferrer" target='_blank'><i className="fab fa-vk"></i></a>
                    <a className='socicons__icon socicons__icon--fb' href="http://www.facebook.com/mariia.sukhareva" rel="noopener noreferrer" target='_blank'><i className="fab fa-facebook-f"></i></a>
          </div>
        );
    }
}

export default SocButtons;