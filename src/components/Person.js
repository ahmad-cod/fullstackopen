import React from 'react';

const Person = ({ person, del }) => {
  const btnStyle = {
    background: "red",
    color: "white",
    padding: "2px 10px" ,
    margin: "2px 15px",
    borderRadius: "6px",
    outline: "none"
  }
  const liStyle = {
    margin: "6px 0",
    padding: "10px 0"
  }
  return (
    <div className="Person">
      <li>{person.name} {person.number} <button style={btnStyle} onClick={() => {if(window.confirm("Are you sure you want to delete this contact?")){del(person.id)}}}>delete</button></li>
    </div>
  );
}

export default Person;
