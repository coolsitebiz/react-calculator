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
        const keyInput = String(e.target.value);
        const operators = "+/*-";
        const initialBadKeys = "0.-+";

        if (keyInput === "CE") {
            this.clearDisplay();
        } 

        if ("1234567890.//+-*".indexOf(keyInput) > -1) {
            if (this.state.input === "0" && !isNaN(keyInput)) {
                this.setState({
                    input: keyInput
                })
            } else if (operators.indexOf(keyInput) > -1){
                this.setState({
                    input: this.state.input + keyInput
                })
            } else {
                this.inputConcat(keyInput);
            }
        }

        if (keyInput === "=") {
            const lastChar = prevInput.charAt(prevInput.length-1);
            let inputString = prevInput;
            if(operators.indexOf(lastChar) > -1) {
                inputString = inputString.substring(0, inputString.length-1);
            }
            this.setState({
                output: eval(inputString)
            })
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