import React from 'react';

const TaskComponent = () => {
    const tasks = ['Learn JSX', 'Understand Components', 'Practice Props and State', 'Build a React App'];
    
    const getRandomTask = () => tasks[Math.floor(Math.random() * tasks.length)];

    return (
        <div>
            <h3>Random Task: {getRandomTask()}</h3>
        </div>
    );
};

export default TaskComponent;