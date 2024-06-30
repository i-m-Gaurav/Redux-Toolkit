import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';


function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h2>
            {todos.length === 0 ? (
                <p className="text-gray-600">No todos yet. Add some!</p>
            ) : (
                <ul className="space-y-3">
                    {todos.map((todo) => (
                        <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-100 rounded-md transition-all hover:bg-gray-200">
                            <span className="text-gray-800">{todo.text}</span>
                            <button 
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-red-500 hover:text-red-700 transition-colors"
                                aria-label="Remove todo"
                            >
delete
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Todos;