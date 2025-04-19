import React, { useState } from 'react';

const Greeting = ({ username }) => {
    const [isDefaultGreeting, setIsDefaultGreeting] = useState(true);
    const currentDate = new Date().toDateString();
    const paragraphStyle = { color: 'blue', fontSize: '18px' };

    const changeGreeting = () => {
        setIsDefaultGreeting(!isDefaultGreeting);
    };

    return (
        <div>
            <h1>{isDefaultGreeting ? `Hello, ${username}!` : `Hi there, ${username}!`}</h1>
            <p style={paragraphStyle}>Today's date is {currentDate}</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
};

export default Greeting;