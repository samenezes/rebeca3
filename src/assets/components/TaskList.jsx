import React, { useState, useEffect } from 'react';
import { TaskCard } from './taskCard';

export function TaskList({ setSelectedTask }) {
    const [newTask, setNewTask] = useState({ title: '', details: '', due: '', creation: '' });
    const [tasks, setTasks] = useState(() => {
        const loadedTasks = JSON.parse(localStorage.getItem('tasks'));
        return loadedTasks || [];
    });
    const [editIndex, setEditIndex] = useState(-1);
    const [filter, setFilter] = useState('all'); 

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addOrUpdateTask = () => {
        if (newTask.title && newTask.details && newTask.due) {
            if (editIndex === -1) {
                const now = new Date();
                const creation = `${now.getDate()}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()} às ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
                setTasks([...tasks, { ...newTask, creation, done: false }]);
            } else {
                const updatedTasks = tasks.map((task, index) =>
                    index === editIndex ? { ...newTask, creation: task.creation, done: task.done } : task
                );
                setTasks(updatedTasks);
                setEditIndex(-1);
            }
            setNewTask({ title: '', details: '', due: '', creation: '' });
        }
    };

    const editTask = (index) => {
        setNewTask(tasks[index]);
        setEditIndex(index);
    };

    const updateTaskStatus = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, done: !task.done } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTask(prevTask => ({ ...prevTask, [name]: value }));
    };

    const filteredTasks = filter === 'all' 
        ? tasks 
        : tasks.filter(task => (filter === 'done' ? task.done : !task.done));

    return (
        <div>
            <h1>Temperatura</h1>
            <div id='littleForm'>
                <input
                    type="text"
                    name="title"
                    placeholder="Temperatura"
                    value={newTask.title}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="details"
                    placeholder="Detalhes"
                    value={newTask.details}
                    onChange={handleInputChange}
                />
                <input
                    type="date"
                    name="due"
                    value={newTask.due}
                    onChange={handleInputChange}
                />
                <button onClick={addOrUpdateTask}>
                    {editIndex === -1 ? 'Adicionar' : 'Update Task'}
                </button>
            </div>
            
           
            <ul>
                {filteredTasks.map((task, index) => (
                    <TaskCard 
                        key={index} 
                        index={index} 
                        task={task} 
                        editTask={editTask} 
                        updateTaskStatus={updateTaskStatus} 
                        deleteTask={deleteTask} 
                        setSelectedTask={setSelectedTask} 
                    />
                ))}
            </ul>
        </div>
    );
}
