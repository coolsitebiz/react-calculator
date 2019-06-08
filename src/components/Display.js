import React from 'react';

function Display(props) {
    return(
        <div id="display" className="display">
            
            <div className="screen">
                <div className="screen-top" dir="rtl">{props.screenTopText}</div>
                <div className="screen-bottom" dir="rtl">{props.screenBottomText}</div>
            </div>

        </div>
    );
}

export default Display;