import React from 'react';

class Buttons extends React.Component {

    render() {
        return(
            <div>
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
            </div>
        );
    }


}

function Button(props) {
    return(
        <div>button</div>
    );
}

export default Buttons;