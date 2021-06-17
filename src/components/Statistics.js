import React from 'react';
import Statistic from './Statistic';

const Statistics = ({ values }) => {
    const { good, neutral, bad, all } = values;

    const average = () => {
       return ((good * 1) + (neutral * 0) + (bad * -1)) / 3
    }
    const positivePercent = () => {
        if(!all) return 0  // because anything divided by zero is not a number
        return ((good / all * 100) + "%")
    }
        
    console.log('positive', positivePercent())
    return (
        <>
            <h3>Statistics</h3>
        { !all ? <p>No Feedback given</p> : (
            <table>
            <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={all} />
            <Statistic text="average" value={average()} />
            <Statistic text="positive" value={positivePercent()} />
            </tbody>
            </table>)
        }
        </>
    )
}

export default Statistics