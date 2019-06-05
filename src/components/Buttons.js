import React from 'react';
import './Buttons.css';

class Buttons extends React.Component {

    render() {
        return(
            <div>
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
                <Button id="zero" buttonText="0"/>
                <Button id="decimal" buttonText="."/>
                <Button id="equals" buttonText="="/>
                <Button id="add" buttonText="+"/>
                <Button id="clear" buttonText="CE"/>
            </div>
        );
    }


}

function Button(props) {
    console.log(props);

    return(
        <div className={!isNaN(props.buttonText) ? 'digit' : 'operator'}>{props.buttonText}</div>
        
    );
}

export default Buttons;