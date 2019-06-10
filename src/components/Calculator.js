import React from 'react';
import Buttons from './Buttons';
import Display from './Display';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "0",
            output: "0"
        }
    }

    handleButtonClick = (e) => {
        const prevInput = String(this.state.input);
        const keyInput = String(e.target.innerHTML);
        const operators = "+/*";
        const initialBadKeys = "0.-+"

        if (keyInput === "CE") {
            this.clearDisplay();
        } 

        

        
    }

    inputConcat = (value) => {
        this.setState({
            input: this.state.input + String(value)
        })
    }

    clearDisplay = () => {
        this.setState({
            input: "0",
            output: "0"
        })
    }


    render() {
        return(
            <div className="container">
                <Display screenTopText={this.state.input.toString()} screenBottomText={this.state.output.toString()}/>
                <Buttons clicked={(this.handleButtonClick)}/>
            </div>
        );
    }
}

export default Calculator;