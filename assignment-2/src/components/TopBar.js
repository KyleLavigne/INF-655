import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import logo from '../logo.svg';
import profilePicture from '../profile.svg';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import EditUserInfoPopup from './EditUserInfoPopup';

const TopBar = ({ user }) => {
    const navigate = useNavigate();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/login');
        }).catch((error) => {
            console.error('Error during logout:', error);
        });
    };

    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent event bubbling
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleEditUserInfo = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    
    return (
        <div className="top-bar">
            <div className="logo" onClick={() => navigate('/')}>
                <img
                    src={logo}
                    alt="Task Manager Logo"
                    className="logo"
                />
            </div>
            <div className="title">Task Manager</div>
            <div className="profile">
                <img
                    src={profilePicture}
                    alt="Profile"
                    className="profile"
                    onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                    <div className="dropdown">
                        <button onClick={handleEditUserInfo}>Edit User Info</button>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                )}
                {isPopupOpen && (
                    <EditUserInfoPopup user={user} onClose={handleClosePopup} />
                )}
            </div>
        </div>
    );
};

export default TopBar;