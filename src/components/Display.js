import React from 'react';

function Display(props) {
    return(
        <div className="display">
            
            <div className="screen">
                <div  id="display" className="screen-top">{props.screenTopText}</div>
                <div  id="display"  className="screen-bottom">{props.screenBottomText}</div>
            </div>

        </div>
    );
}

export default Display;