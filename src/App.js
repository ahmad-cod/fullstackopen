import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import phoneService from './services/phones';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ filtered, setFiltered ] = useState([]);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    console.log('effect')
    phoneService.getAll()
        .then(response => {
          console.log(response)
          setPersons(response.data)
        }) 
  
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newName) return alert('please input a name');
    const samePerson = persons.find((person) => person.name === newName)
    if(samePerson) {
      console.log('same person', samePerson.id)
      let confirmed = window.confirm(`${samePerson.name} is already added to phonebook, replace the old number with a new one`)
      if(confirmed)
      return phoneService.update(samePerson.id,{name: newName, number: newNumber})
           .then(res => {
             console.log(res)
             setPersons(persons.map(person => person.id !== samePerson.id ? person : res.data))
           })
           .catch(error => {
            setNotification({error})
            setTimeout(() => setNotification(null), 5000)
          })
    }
    phoneService.create({name: newName, number: newNumber})
            .then(res => {
              console.log(res);
              setPersons(persons.concat(res.data))
              setNotification({success : `${newName} has been created successfully`})
              setTimeout(() => setNotification(null), 4000)
            })
            .catch(error => {
              setNotification({error})
              setTimeout(() => setNotification(null), 5000)
            })
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
  const handleDelete = (personid) => {
  console.log(personid)
  const deletedContact = persons.find(person => person.id === personid)
    phoneService.deletePhone(personid)
      .then(res => {
        console.log(res)
        setPersons(persons.filter(person => person.id !== personid));
        setNotification({success : `You successfully deleted ${deletedContact.name}`})
        setTimeout(() => setNotification(null), 4000)
      })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <Filter handleChange={handleChange} />
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <h2>Numbers</h2>
      <Persons persons={persons} filtered={filtered} del={handleDelete} />
      ...<div>debug: {newName}</div>
    </div>
  )
}

export default App