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

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        var text = event.target.buttonText;
        this.setState({
            input: text
        })
    }

    render() {
        return(
            <div className="container">
                <Display screenTopText={this.state.input.toString()} screenBottomText={this.state.output.toString()}/>
                <Buttons clicked={this.handleButtonClick}/>
            </div>
        );
    }
}

export default Calculator;