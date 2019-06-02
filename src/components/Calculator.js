import React from 'react';
import Buttons from './Buttons';
import Display from './Display';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Display />
                <Buttons />
            </div>
        );
    }
}

export default Calculator;