import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [ filtered, setFiltered ] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios.get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          // console.log(response.data)
          setCountries(response.data)
        }) 
  
  }, [])

  const handleChange = (e) => {
    if(!e.target.value) return setFiltered([]);
    let input = new RegExp(e.target.value,'i')
    
    let filtered = countries.filter(country => input.test(country.name))
    // console.log(filtered);
    setFiltered(filtered)
  }

  return (
    <div>
      <h2>Rest Countries</h2>
      <Filter handleChange={handleChange} />
      <Countries filtered={filtered} />
    </div>
  )
}

export default App