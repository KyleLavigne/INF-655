import React, { useState } from 'react';
import { serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!taskName || !description) {
            alert('Both fields are required!');
            return;
        }
        try {
            const task = {
                taskName,
                taskDescription: description,
                createdAt: serverTimestamp(),
                userId: auth.currentUser.uid
            };
            await addDoc(collection(db, 'tasks'), task);
            setTaskName('');
            setDescription('');
        } catch (error) {
            console.error('Error adding task: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter Task Name"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
