import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, query, where, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase';
import './TaskComponent.css';

const TaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const [selectedTask, setSelectedTask] = useState(null);
    const [sortOption, setSortOption] = useState('newest');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const q = query(collection(db, 'tasks'), where('userId', '==', auth.currentUser.uid));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const tasksData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTasks(tasksData);
        });
        return () => unsubscribe();
    }, []);

    const deleteTask = async (taskId) => {
        if (window.confirm('Are you sure you want to delete this task?')) {
            await deleteDoc(doc(db, 'tasks', taskId));
            if (selectedTask?.id === taskId) {
                setSelectedTask(null);
            }
        }
    };

    const handleTaskClick = (task) => {
        setSelectedTask(task);
    };

    const handleClose = () => {
        setSelectedTask(null);
    };

    const sortedTasks = [...tasks].sort((a, b) => {
        if (sortOption === 'name') {
            return a.taskName.localeCompare(b.taskName);
        } else if (sortOption === 'reverseName') {
            return b.taskName.localeCompare(a.taskName);
        } else if (sortOption === 'newest') {
            return b.createdAt - a.createdAt;
        } else if (sortOption === 'oldest') {
            return a.createdAt - b.createdAt;
        }
        return 0;
    });

    const filteredTasks = sortedTasks.filter((task) =>
        task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="task-container">
            <div className="sort-options">
                <label>Sort by: </label>
                <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="name">Alphabetically</option>
                    <option value="reverseName">Reverse Alphabetically</option>
                </select>
            </div>
            <input
                type="text"
                placeholder="Search tasks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="task-search-bar"
            />
            {filteredTasks.map((task) => (
                <div key={task.id} className="task-card" onClick={() => handleTaskClick(task)}>
                    <h3>{task.taskName}</h3>
                </div>
            ))}

            {selectedTask && (
                <div className="task-modal">
                    <div className="task-modal-content">
                        <h2>{selectedTask.taskName}</h2>
                        <p>{selectedTask.taskDescription}</p>
                        <button onClick={() => deleteTask(selectedTask.id)}>Delete Task</button>
                        <button onClick={handleClose}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TaskComponent;