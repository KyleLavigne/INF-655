import React from 'react';

const Greeting = () => {
    const currentDate = new Date().toDateString();
    const paragraphStyle = { color: 'blue', fontSize: '18px' };

    return (
        <div>
            <h1>Hello, Welcome to React!</h1>
            <p style={paragraphStyle}>Today's date is {currentDate}</p>
        </div>
    );
};

export default Greeting;