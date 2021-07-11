import React from 'react';
import "../styles/button.css";

const Button = (props) => {
    return (
        <>
            <button className="button" onClick={props.data}>{props.name}</button>
        </>
    );
}

export default Button;
