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
        const lastChar = prevInput.charAt(prevInput.length-1);
        const firstChar = prevInput.length === 1 ? true : false;

        switch(keyInput) {
            case "CE":
                this.clearDisplay();
                break;
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":
                this.handleZero(firstChar, prevInput, keyInput);
                break;
            case "+":
            case "*":
            case "/":
            case "-":
                if("+-/*".includes(lastChar)) {
                    this.setState({
                        input: prevInput.substring(0, prevInput.length-1) + keyInput
                    })
                } else {
                    this.inputConcat(keyInput);
                }
                break;
            case ".":
                if (this.checkDecimal(prevInput)) {
                    return;
                } else {
                    this.inputConcat(keyInput);
                }
                break;
            case "=":
                let inputString = prevInput;
                if(operators.indexOf(lastChar) > -1) {
                    inputString = inputString.substring(0, inputString.length-1);
                }
                let result = eval(inputString);
                this.setState({
                    input: result,
                    output: result
                })
                break;
            default:
                return;

        }    
    }

    checkDecimal(input) {
        const regex = /[-+*/]/g;
        const lastTerm = input.split(regex).slice(-1);
        return lastTerm[0].includes(".");
      }

    handleZero(firstChar, prevInput, keyInput) {
        if (firstChar && prevInput === "0") {
            this.setState({
                input: keyInput
            })
        } else {
            this.setState({
                input: prevInput + keyInput
            })
        };
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