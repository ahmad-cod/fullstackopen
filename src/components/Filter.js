import React from 'react';

const Filter = ({ handleChange }) => {
    return (
      <p>filter shown with <input id="filter" onChange={handleChange} /></p>
    )
}

export default Filter