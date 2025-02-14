import React from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';

const App = () => {
    return (
        <div>
            <Greeting />
            <UserInfo />
            <TaskComponent />
        </div>
    );
};

export default App;
