import React, { useState } from 'react';
import Button from './components/Button';
import Display from './components/Display';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0)
  
  const handleGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  };
  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  };

  return (
    <React.Fragment>
      <Display />
      <Button handleClick={handleGood} text="Good" value={good}/>
      <Button handleClick={handleNeutral} text="Neutral" value={neutral}/>
      <Button handleClick={handleBad} text="Bad" value={bad}/>
      <Statistics values={{good, neutral, bad, all}} />
    </React.Fragment>
  )
}

export default App