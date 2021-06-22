import React from 'react';

const Filter = ({ handleChange }) => {
    return (
      <p>Filter shown with <input id="filter" placeholder="filter" onChange={handleChange} /></p>
    )
}

export default Filter