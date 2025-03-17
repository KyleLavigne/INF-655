import React from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';

const App = () => {
    const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];

    const handleAlert = () => {
        alert('Button clicked!');
    };

    return (
        <div>
            <Greeting username="Alice" />
            <Greeting username="Bob" />
            <UserInfo handleClick={handleAlert} />
            <TaskComponent />
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
