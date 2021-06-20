import React from 'react';
import Person from './Person';

const Persons = ({ persons, filtered, del }) => {
    return (
        <>
        <ul>
            {filtered.length ? 
            filtered.map((person) => <Person key={person.id} person={person} del={del}/>) : 
            persons.map((person) => <Person key={person.id} person={person} del={del} />)}
      </ul>
        </>
    )
}

export default Persons