import React from 'react';

const CharComponent = (props) => {
    const instyle = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <div style={instyle} onClick={props.clicked}>
            {props.character}
        </div>   
    );
}

export default CharComponent;