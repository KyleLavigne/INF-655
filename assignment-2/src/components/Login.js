import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
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
            <button type="submit">Login</button>
            <br />
            <p>Don't already have an account? <button type="button" onClick={() => navigate('/signup')}>Sign Up here</button></p>
        </form>
    );
};

export default Login;
