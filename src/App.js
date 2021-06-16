import React, { useState } from 'react';
import Button from './components/Button';
import Header from './components/Header';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0);
  
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  return (
    <div>
      <Header />
      <Button handleClick={handleGood} text="Good" value={good}/>
      <Button handleClick={handleNeutral} text="Neutral" value={neutral}/>
      <Button handleClick={handleBad} text="Bad" value={bad}/>
      <Statistics values={{good, neutral, bad}} />
    </div>
  )
}

export default App