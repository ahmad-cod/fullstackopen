import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filtered, setFiltered ] = useState([]);

  useEffect(() => {
    console.log('effect')
    axios.get('http://localhost:3001/persons')
        .then(response => {
          console.log(response)
          setPersons(response.data)
        }) 
  
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newName) return alert('please input a name')
    if(persons.find(person => person.name === newName)) return alert(`${newName} is already added to phonebook`)
    const newPersons = [...persons, {name: newName, number: newNumber}]
    setPersons(newPersons)
  }
  const handleChange = (e) => {
    if(e.target.id === 'name') return setNewName(() => e.target.value)
    if(e.target.id === 'number') return setNewNumber(() => e.target.value)
    if(e.target.id === 'filter') {
      let filtered = persons.filter(person => person.name.includes(e.target.value))
      console.log(filtered);
      setFiltered(() => filtered)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleChange={handleChange} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} />
      ...<div>debug: {newName}</div>
    </div>
  )
}

export default App