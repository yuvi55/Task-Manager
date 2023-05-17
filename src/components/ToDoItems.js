import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const ToDoItem = ({ todo, index, handleRemoveTodo, handleEditTodo }) => {
    return (
        <li className="Todo">
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
                    className="todo-icon"
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
                    className="todo-icon"
                />
            </div>
        </li>
    );
};

export default ToDoItem; 