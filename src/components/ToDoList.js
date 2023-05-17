import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

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

    const sortedTodos = todos.sort((a, b) => new Date(a.date) - new Date(b.date));

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
            <ul className="todo-list">
                {sortedTodos.map((todo, index) => (
                    <li key={index} className="Todo">
                        <div>
                            <div>
                                <strong>Date:</strong> {todo.date}
                            </div>
                            <div>
                                <strong>Title:</strong> {todo.title}
                            </div>
                            <div>
                                <strong>Task:</strong> {todo.task}
                            </div>
                        </div>
                        <div className="icon-wrapper">
                            <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => handleRemoveTodo(index)}
                            />
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                onClick={() => {
                                    const newTitle = prompt('Enter new title', todo.title);
                                    const newTask = prompt('Enter new task', todo.task);
                                    handleEditTodo(index, {
                                        ...todo,
                                        title: newTitle || todo.title,
                                        task: newTask || todo.task,
                                    });
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
