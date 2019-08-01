import React from 'react';

const Validation = (props) => {
    return (
        <div>
            {(props.text.length <5) ? "Text to short" : "text long enough" }
        </div>
    )

};

export default Validation;