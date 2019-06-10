import React from 'react';

class Buttons extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div className='buttonGrid'>
                <Button id="seven" buttonText="7" clicked={this.props.clicked}/>
                <Button id="eight" buttonText= "8" clicked={this.props.clicked}/>
                <Button id="nine" buttonText="9" clicked={this.props.clicked}/>
                <Button id="divide" buttonText="/" clicked={this.props.clicked}/>
                <Button id="four" buttonText="4" clicked={this.props.clicked}/>
                <Button id="five" buttonText="5" clicked={this.props.clicked}/>
                <Button id="six" buttonText="6" clicked={this.props.clicked}/>
                <Button id="multiply" buttonText="*" clicked={this.props.clicked}/>
                <Button id="one" buttonText="1" clicked={this.props.clicked}/>
                <Button id="two" buttonText="2" clicked={this.props.clicked}/>
                <Button id="three" buttonText="3" clicked={this.props.clicked}/>
                <Button id="subtract" buttonText="-" clicked={this.props.clicked}/>
                <Button id="decimal" buttonText="." clicked={this.props.clicked}/>
                <Button id="zero" buttonText="0" clicked={this.props.clicked}/>
                <Button id="equals" buttonText="=" clicked={this.props.clicked}/>
                <Button id="add" buttonText="+" clicked={this.props.clicked}/>
                <Button id="clear" buttonText="CE" clicked={this.props.clicked} />
            </div>
        );
    }


}

function Button(props) {
    return(
        <button className={
            !isNaN(props.buttonText) ? 'digit' 
            : props.buttonText.length > 1 ? 'clear' 
            : 'operator'}
            onClick={props.clicked}
            value={props.buttonText}
            >
            {props.buttonText}
        </button>
        
    );
}

export default Buttons;