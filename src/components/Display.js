import React from 'react';

function Display(props) {
    return(
        <div className="display">
            
            <div className="screen">
                <span id="display">{props.screenTopText}</span><br /> 
                <span>{props.screenBottomText}</span>              
            </div>

        </div>
    );
}

export default Display;