import React, { useState } from 'react';
import TodoItem from './ToDoItems.js';
import { validateTodo } from './validations.js';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: '', date: '', task: '' });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddTodo = () => {
        const validation = validateTodo(newTodo);
        if (!validation.success) {
            setErrorMessage(validation.message);
            return;
        }

        setTodos([...todos, newTodo]);
        setNewTodo({ title: '', date: '', task: '' });
        setErrorMessage('');
    };

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index, updatedTodo) => {
        setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
    };

    const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

    return (
        <div className="container">
            <h1>Task Manager: Get Organized!</h1>
            <div className="TodoWrapper">
                <input
                    type="text"
                    name="title"
                    value={newTodo.title}
                    onChange={handleInputChange}
                    className="title_input todo-input"
                    placeholder="Title for Task"
                    required
                />
                <input
                    type="date"
                    name="date"
                    value={newTodo.date}
                    onChange={handleInputChange}
                    className="date_input todo-input"
                    placeholder="Date"
                    required
                />
                <input
                    type="text"
                    name="task"
                    className="description_input todo-input"
                    value={newTodo.task}
                    onChange={handleInputChange}
                    placeholder="Task Description"
                    required
                />
                <button className="todo-btn" onClick={handleAddTodo}>
                    Add Task
                </button>
            </div>
            {errorMessage && <div className="error">{errorMessage}</div>}
            <ul className="todo-list">
                {sortedTodos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        handleRemoveTodo={handleRemoveTodo}
                        handleEditTodo={handleEditTodo}
                    />
                ))}
            </ul>
        </div>
    );
};
