import React from 'react';
import Part from './Part';

const Statistics = ({ values }) => {
    const { good, neutral, bad } = values
    return (
        < >
            <h4>Statistics</h4>
            <Part text="good" value={good} />
            <Part text="neutral" value={neutral} />
            <Part text="bad" value={bad} />
        </>
    )
}

export default Statistics