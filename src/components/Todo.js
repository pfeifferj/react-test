import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoList from './TodoList';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });


    const submitUpdate = value =>{
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) { 
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className="container max-w-md">
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row py-2'} key={index}>                
        <div className="min-w-full inline-grid grid-cols-2">
            <div key={todo.id} onClick={() => completeTodo(todo.id)} className="bg-gray-200 p-2 rounded-lg max-w-md">
                {todo.text}
            </div>

            <div className="icons bg-gray-500 p-2 rounded-lg text-white max-w-xs text-center">
                <RiCloseCircleLine 
                onClick={() => removeTodo(todo.id)}
                className="deleteIcon inline"
                />
                <TiEdit 
                onClick={() => setEdit({id: todo.id, value: todo.text})}
                className="editIcon inline"
                />
            </div>
            </div>
        </div>
</div>
    ));
}

export default Todo
