import React from 'react';

const Form = ({ handleChange, handleSubmit }) => {
    return (
        < >
            <form onSubmit={handleSubmit}>
                <div>
                name: <input id="name" onChange={handleChange} />
                </div>
                <div>
                number: <input id="number" onChange={handleChange} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Form