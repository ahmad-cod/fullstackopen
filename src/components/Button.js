import React from 'react';

const Button = ({ text, value, handleClick }) => {
    
    return (<button onClick={handleClick}>{text} {value}</button>)
}

export default Button