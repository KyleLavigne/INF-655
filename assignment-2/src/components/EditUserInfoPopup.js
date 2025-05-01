import React, { useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import './UserInfo.css';

const EditUserInfoPopup = ({ user, onClose }) => {
    const [name] = useState(user.name || '');
    const [profession, setProfession] = useState(user.profession || '');

    const handleSave = async () => {
        try {
            // Update Firebase Auth profile
            await updateProfile(auth.currentUser, { displayName: name });

            // Update Firestore user document
            const userDoc = doc(db, 'users', auth.currentUser.uid);
            await updateDoc(userDoc, { profession });

            alert('User information updated successfully!');
            onClose();
        } catch (error) {
            console.error('Error updating user information:', error);
            alert('Failed to update user information.');
        }
    };

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                <h2>Edit User Information</h2>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        disabled
                    />
                </label>
                <label>
                    Profession:
                    <input
                        type="text"
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                    />
                </label>
                <div className="popup-actions">
                    <button onClick={handleSave}>Save</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditUserInfoPopup;