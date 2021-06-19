import React, { useState } from 'react'
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filtered, setFiltered ] = useState([]);

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