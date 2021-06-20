import React from 'react';

const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    else if(message.error){
    return (
      <div className="error">
        {message}
      </div>
    )
    }
    else {
        return (
            <div className="success">
                {message.success}
            </div>
        )
    }
  }
  export default Notification