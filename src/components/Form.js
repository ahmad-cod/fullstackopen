import React from 'react';

const Form = ({ handleChange, handleSubmit, value }) => {
    return (
        < >
            <form onSubmit={handleSubmit}>
                <div>
                Name: <input id="name" placeholder="new name" onChange={handleChange} value={value.newName} />
                </div>
                <div>
                Number: <input id="number" placeholder="contact number" onChange={handleChange} value={value.newNumber} />
                </div>
                <div>
                <button type="submit">Add</button>
                </div>
            </form>
        </>
    )
}

export default Form