import React, { useState } from 'react';

const TaskComponent = ({ tasks, setTasks, deleteTask }) => {
    const [search, setSearch] = useState('');

    const filteredTasks = tasks.filter(task =>
        task.taskName.toLowerCase().includes(search.toLowerCase())
    );

    const sortTasks = () => {
        setTasks([...tasks].sort((a, b) => a.taskName.localeCompare(b.taskName)));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search Tasks"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={sortTasks}>Sort by Name</button>
            <ul>
                {filteredTasks.map((task, index) => (
                    <li key={index}>
                        {task.taskName} - {task.description}
                        <button onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskComponent;