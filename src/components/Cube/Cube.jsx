import React from 'react';
const Cube = ({ cubeskills }) => {
    return (
        <div class='cube_content'>
            <div class='cube-fade-in'>
                <div className='cube'>
                    <div class='cube_row'>
                        <div className='cube_side side_back'>
                            {cubeskills[0]}
                        </div>
                    </div>
                    <div class='cube_row'>
                        <div className='cube_side side_left'>
                            {cubeskills[1]}
                        </div>
                        <div className='cube_side side_bottom'>
                            {cubeskills[2]}
                            <br />
                            {cubeskills[3]}
                        </div>
                        <div className='cube_side side_right'>
                            {cubeskills[4]}
                        </div>
                        <div className='cube_side side_top'>
                            {cubeskills[5]}
                            <br />
                            {cubeskills[6]}
                        </div>
                    </div>
                    <div class='cube_row'>
                        <div className='cube_side side_front'>
                            {cubeskills[7]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cube;
