import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    return (
        < >
            {parts && parts.map(part => <Part part={part} key={part.id} />)}
        </>
    )
}

export default Content