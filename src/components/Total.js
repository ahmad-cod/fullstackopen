import React from 'react';

const Total = ({ parts }) => {
    const exercises = parts ? parts.map(part => part.exercises) : 0;
    return (<p>Number of exercises { exercises.reduce((sum, exercise) => sum + exercise) }</p>)
}

export default Total