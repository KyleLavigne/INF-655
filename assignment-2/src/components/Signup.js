import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, { displayName: name });

            // Create a Firestore document for the new user
            const userDoc = doc(db, 'users', user.uid);
            await setDoc(userDoc, { name, profession: '', email });

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <br />
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ flex: 1, paddingRight: '50px' }}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{
                        position: 'absolute',
                        right: '0px',
                        top: '35%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#007bff',
                        textDecoration: 'underline'
                    }}
                >
                    {showPassword ? "Hide" : "View"}
                </button>
            </div>
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    style={{ flex: 1, paddingRight: '50px' }}
                />
                <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{
                        position: 'absolute',
                        right: '0px',
                        top: '35%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px',
                        color: '#007bff',
                        textDecoration: 'underline'
                    }}
                >
                    {showConfirmPassword ? "Hide" : "View"}
                </button>
            </div>
            <br />
            <button type="submit">Sign Up</button>
            <p>Already have an account? <button type="button" onClick={() => navigate('/login')}>Log in here</button></p>
        </form>
    );
};

export default Signup;
