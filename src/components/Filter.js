import React from 'react';

const Filter = ({ handleChange }) => {
    return (
      <p>find country <input id="filter" onChange={handleChange} /></p>
    )
}

export default Filter