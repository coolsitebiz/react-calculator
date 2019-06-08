import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return(
            <div className='buttonGrid'>
                <Button id="seven" buttonText="7"/>
                <Button id="eight" buttonText= "8"/>
                <Button id="nine" buttonText="9"/>
                <Button id="divide" buttonText="/"/>
                <Button id="four" buttonText="4"/>
                <Button id="five" buttonText="5"/>
                <Button id="six" buttonText="6"/>
                <Button id="multiply" buttonText="*"/>
                <Button id="one" buttonText="1"/>
                <Button id="two" buttonText="2"/>
                <Button id="three" buttonText="3"/>
                <Button id="subtract" buttonText="-"/>
                <Button id="decimal" buttonText="."/>
                <Button id="zero" buttonText="0"/>
                <Button id="equals" buttonText="="/>
                <Button id="add" buttonText="+"/>
                <Button id="clear" buttonText="CE" clicked={this.props.clicked}/>
            </div>
        );
    }


}

function Button(props) {
    return(
        <div className={
            !isNaN(props.buttonText) ? 'digit' 
            : props.buttonText.length > 1 ? 'clear' 
            : 'operator'}
            buttonText={props.buttonText}
            id={props.id}
            onClick={props.clicked}>
            {props.buttonText}
        </div>
        
    );
}

export default Buttons;