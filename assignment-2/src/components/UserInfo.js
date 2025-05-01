import React, { useState, useEffect } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db, auth } from '../firebase';

const UserInfo = ({ handleClick }) => {
    const [name, setName] = useState('');
    const [profession, setProfession] = useState('');
    const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 100) + 1);

    useEffect(() => {
        const unsubscribe = onSnapshot(doc(db, 'users', auth.currentUser.uid), (docSnapshot) => {
            if (docSnapshot.exists()) {
                setName(docSnapshot.data().name || 'John Doe');
                setProfession(docSnapshot.data().profession || 'Software Developer');
            }
        });

        return () => unsubscribe();
    }, []);

    const generateNewLuckyNumber = () => {
        setLuckyNumber(Math.floor(Math.random() * 100) + 1);
    };

    return (
        <div>
            <h2>User Information</h2>
            <p>Name: {name}</p>
            <p>Profession: {profession}</p>
            <p>Your lucky number is: {luckyNumber}</p>
            <button onClick={generateNewLuckyNumber}>Generate New Lucky Number</button>
            <button onClick={handleClick}>Show Alert</button>
        </div>
    );
};

export default UserInfo;