import React, { useState, useEffect } from 'react';
import { onSnapshot, doc } from 'firebase/firestore';
import { db, auth } from '../firebase';

const Greeting = ({ username }) => {
    const [isDefaultGreeting, setIsDefaultGreeting] = useState(true);
    const [currentUsername, setUsername] = useState(username);
    const currentDate = new Date().toDateString();
    const paragraphStyle = { color: 'blue', fontSize: '18px' };

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), (docSnapshot) => {
            if (docSnapshot.exists()) {
                setUsername(docSnapshot.data().name || '');
            }
        });

        return () => unsubscribe();
    }, []);

    const changeGreeting = () => {
        setIsDefaultGreeting(!isDefaultGreeting);
    };

    return (
        <div>
            <h1>{isDefaultGreeting ? `Hello, ${currentUsername}!` : `Hi there, ${currentUsername}!`}</h1>
            <p style={paragraphStyle}>Today's date is {currentDate}</p>
            <button onClick={changeGreeting}>Change Greeting</button>
        </div>
    );
};

export default Greeting;