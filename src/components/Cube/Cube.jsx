import React, { Component } from 'react';
class Cube extends Component {
    render() {
       return (
<div class="cube_content">
    <div class="cube-fade-in">
    <div className="cube">
        <div class="cube_row">
            <div className="cube_side side_back">React</div>
        </div>
        <div class="cube_row">
            <div className="cube_side side_left">HTML5</div>
            <div className="cube_side side_bottom">JavaScript<br/>ES6</div>
            <div className="cube_side side_right">CSS3</div>
            <div className="cube_side side_top">SASS<br/>LESS</div>
        </div>
        <div class="cube_row">
            <div className="cube_side side_front">JQuery</div>
        </div>
    </div>
</div>
</div>
);
     }
   }

export default Cube;