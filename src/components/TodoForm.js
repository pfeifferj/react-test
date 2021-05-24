import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
    };

    return (
        <div className="max-w-md pb-8">
            <form className="todo-form min-w-full inline-grid grid-cols-2" onSubmit={handleSubmit}>                
                <input type="text" placeholder="add item" value={input} name="text" className="rounded-lg todo-input bg-gray-200 rounded" onChange={handleChange} ref={inputRef}/>
                <button className="rounded-lg todo-button bg-gray-500 text-white rounded p-2">add todo</button>
            </form>
        </div>
    )
}

export default TodoForm;