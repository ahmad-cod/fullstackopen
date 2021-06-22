import React from 'react';

const Person = ({ person, del }) => {
  const btnStyle = {
    background: "red",
    color: "white",
    padding: "2px 10px" ,
    borderRadius: "10px"
  }
  return (
    <div className="Person">
      <li>{person.name} {person.number} <button style={btnStyle} onClick={() => {if(window.confirm("Are you sure you want to delete this contact?")){del(person.id)}}}>delete</button></li>
    </div>
  );
}

export default Person;
