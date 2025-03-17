import React, { useState } from 'react';

const TaskForm = () => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(task);
        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task Name"
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TaskForm;
