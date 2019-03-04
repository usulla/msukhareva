import React, { Component } from 'react';
import Logo from '../../Logo/Logo.jsx';
import SocButtons from '../../SocButtons/SocButtons.jsx';
import style from './leftcolumn.scss';

class LeftColumn extends Component {
    render() {
        return (
            <div className='left_column'>
                <Logo />
                <SocButtons />
            </div>
        );
    }
}

export default LeftColumn;
