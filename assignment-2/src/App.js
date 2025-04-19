import React, { useState } from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    const handleAlert = () => {
        alert('Button clicked!');
    };

    const addTask = (newTask) => {
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (index) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            setTasks(tasks.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <Greeting username="Alice" />
            <Greeting username="Bob" />
            <UserInfo handleClick={handleAlert} />
            <TaskForm addTask={addTask} />
            <TaskComponent tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
        </div>
    );
};

export default App;
