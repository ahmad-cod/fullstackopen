import React from 'react';
import Person from './Person';

const Persons = ({ persons, filtered }) => {
    return (
        <>
        <ul>
            {filtered.length ? 
            filtered.map((person, index) => <Person key={index} person={person}/>) : 
            persons.map((person, index) => <Person key={index} person={person} />)}
      </ul>
        </>
    )
}

export default Persons