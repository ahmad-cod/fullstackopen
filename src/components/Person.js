import React from 'react';

const Person = ({ person, del }) => {

  return (
    <div className="Person">
      <li>{person.name} {person.number} <button onClick={() => {if(window.confirm("Are you sure you want to delete this contact?")){del(person.id)}}}>delete</button></li>
    </div>
  );
}

export default Person;
