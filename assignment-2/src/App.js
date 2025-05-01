import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import TaskForm from './components/TaskForm';
import Login from './components/Login';
import Signup from './components/Signup';
import TopBar from './components/TopBar';
import './App.css';

const db = getFirestore();

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser({
                    email: currentUser.email,
                    name: currentUser.displayName || "User"
                });
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, 'tasks'),
            (snapshot) => {
                const tasksData = snapshot.docs
                    .filter((doc) => doc.data().userId === auth.currentUser?.uid)
                    .map((doc) => ({ id: doc.id, ...doc.data() }));
                setTasks(tasksData);
            },
            (error) => {
                console.error('Error fetching tasks: ', error);
            }
        );
        return () => unsubscribe();
    }, [user]);

    const addTask = async (newTask) => {
        try {
            await addDoc(collection(db, 'tasks'), { ...newTask, userId: auth.currentUser.uid });
        } catch (error) {
            console.error('Error adding task: ', error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            await deleteDoc(doc(db, 'tasks', taskId));
        } catch (error) {
            console.error('Error deleting task: ', error);
        }
    };

    return (
        <Router>
            <div>
                {user ? (
                    <>
                        <TopBar user={user} />
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <Greeting username={user.name} />
                                        <UserInfo handleClick={() => alert('Button clicked!')} />
                                        <TaskForm addTask={addTask} />
                                        <TaskComponent tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
                                    </>
                                }
                            />
                            <Route path="*" element={<Navigate to="/" />} />
                        </Routes>
                    </>
                ) : (
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </div>
        </Router>
    );
};

export default App;
