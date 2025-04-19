import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!taskName || !description) {
            alert('Both fields are required!');
            return;
        }
        addTask({ taskName, description });
        setTaskName('');
        setDescription('');
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
