import React from 'react';

const Form = ({ handleChange, handleSubmit, value }) => {
    // const [inputValue, setInputValue] = useState('')
    return (
        < >
            <form onSubmit={handleSubmit}>
                <div>
                name: <input id="name" onChange={handleChange} value={value.newName} />
                </div>
                <div>
                number: <input id="number" onChange={handleChange} value={value.newNumber} />
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default Form