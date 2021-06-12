import React from 'react';
import style from './cube.scss';

const Cube = ({ cubeskills }) => {
    return (
        <div className='cube_content'>
            <div className='cube-fade-in'>
                <div className='cube'>
                    <div className='cube_row'>
                        <div className='cube_side side_back'>
                            {cubeskills[0]}
                            <br />
                            {cubeskills[1]}
                        </div>
                    </div>
                    <div className='cube_row'>
                        <div className='cube_side side_left'>
                            {cubeskills[2]}
                            <br />
                            {cubeskills[3]}
                        </div>
                        <div className='cube_side side_bottom'>
                            {cubeskills[4]}
                            <br />
                            {cubeskills[5]}
                        </div>
                        <div className='cube_side side_right'>
                            {cubeskills[6]}
                            <br />
                            {cubeskills[7]}
                        </div>
                        <div className='cube_side side_top'>
                            {cubeskills[8]}
                        </div>
                    </div>
                    <div className='cube_row'>
                        <div className='cube_side side_front'>
                            {cubeskills[9]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cube;
