import React, { useState } from 'react';

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ title: '', date: '', task: '' });

    const handleInputChange = (e) => {
        setNewTodo({
            ...newTodo,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddTodo = () => {
        if (newTodo.title && newTodo.date && newTodo.task) {
            setTodos([...todos, newTodo]);
            setNewTodo({ title: '', date: '', task: '' });
        }
    };

    const handleRemoveTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    const handleEditTodo = (index, updatedTodo) => {
        setTodos(todos.map((todo, i) => (i === index ? updatedTodo : todo)));
    };

    return (
        <div className="container">
            <h1>Todo List</h1>
            <div className="TodoWrapper">
                <input
                    type="text"
                    name="title"
                    value={newTodo.title}
                    onChange={handleInputChange}
                    className="title_input todo-input"
                    placeholder="Title for Task"
                />
                <input
                    type="date"
                    name="date"
                    value={newTodo.date}
                    onChange={handleInputChange}
                    className="date_input todo-input"
                    placeholder="Date"
                />
                <input
                    type="text"
                    name="task"
                    className="description_input todo-input"
                    value={newTodo.task}
                    onChange={handleInputChange}
                    placeholder="Task Description"
                />
                <button className="todo-btn" onClick={handleAddTodo}>
                    Add Task
                </button>
            </div>
            <ul className="todo-list">
                {todos.map((todo, index) => (
                    <li key={index} className="Todo">
                        <div>
                            <div>
                                <strong>Title:</strong> {todo.title}
                            </div>
                            <div>
                                <strong>Date:</strong> {todo.date}
                            </div>
                            <div>
                                <strong>Task:</strong> {todo.task}
                            </div>
                        </div>
                        <button
                            className="remove_button"
                            onClick={() => handleRemoveTodo(index)}
                        >
                            Remove
                        </button>
                        <button
                            className="edit_button"
                            onClick={() => {
                                const newTitle = prompt('Enter new title', todo.title);
                                const newTask = prompt('Enter new task', todo.task);
                                handleEditTodo(index, {
                                    ...todo,
                                    title: newTitle || todo.title,
                                    task: newTask || todo.task,
                                });
                            }}
                        >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
