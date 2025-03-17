import React from 'react';

const Greeting = ({ username }) => {
    const currentDate = new Date().toDateString();
    const paragraphStyle = { color: 'blue', fontSize: '18px' };

    return (
        <div>
            <h1>Hello, {username}!</h1>
            <p style={paragraphStyle}>Today's date is {currentDate}</p>
        </div>
    );
};

export default Greeting;