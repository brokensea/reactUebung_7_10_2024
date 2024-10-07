import React, { useState } from 'react';

const Todo = ({ todo, onDelete }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '5px 0' }}>
            <span>{todo.text}</span>
            <button onClick={() => onDelete(todo.id)} style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Delete
            </button>
        </div>
    );
};

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue) {
            const newTodo = {
                id: Date.now(), // 使用时间戳作为唯一ID
                text: inputValue,
            };
            setTodos([...todos, newTodo]);
            setInputValue(''); // 清空输入框
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
                style={{ width: '70%', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
            />
            <button onClick={addTodo} style={{ marginLeft: '10px', padding: '8px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                Add
            </button>
            <div style={{ marginTop: '20px' }}>
                {todos.length === 0 ? (
                    <p>No tasks available</p>
                ) : (
                    todos.map(todo => (
                        <Todo key={todo.id} todo={todo} onDelete={deleteTodo} />
                    ))
                )}
            </div>
        </div>
    );
};

export default TodoList;
