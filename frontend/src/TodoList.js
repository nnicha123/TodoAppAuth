import React, { useEffect, useState } from 'react'
import axios from './config/axios'
import './TodoList.css'

function TodoList() {
    const [todo, setTodo] = useState([])
    const [add, setAdd] = useState(false)
    const [newTodo, setNewTodo] = useState('')
    const [createTodo, setCreateTodo] = useState({})
    useEffect(() => {
        axios.get('http://localhost:8000/todos').then(res => {
            setTodo(res.data)
        })
    }, [])
    const complete = (index) => {
        console.log(todo[index].id)
        axios.put('http://localhost:8000/todos/' + todo[index].id, { status: 'completed' }).then(res => {
            axios.get('http://localhost:8000/todos').then(res => {
                setTodo(res.data)
            })
        })
    }
    const addTodo = () => {
        setAdd(true)
    }
    const doneAdding = () => {
        axios.get('http://localhost:8000/todos').then(res => {
            setTodo(res.data)
            setAdd(false)
        })
    }
    const addedTodo = () => {
        axios.post('http://localhost:8000/todos', { title: newTodo }).then(res => {
            doneAdding()
        })
    }
    const deleteTodo = (id) => {
        axios.delete('http://localhost:8000/todos/' + id).then(res => {
            axios.get('http://localhost:8000/todos').then(res => {
                setTodo(res.data)
            })
        })
    }
    return (
        <div>
            {!add && <button className="addTodo" onClick={() => addTodo()}>Add Todo</button>}
            {!add && <div className="todoWrapper">
                {todo.map((el, index) => {
                    return (
                        <div className="todoItems" key={el.id}>
                            <button className="deleteTodo" style={{ margin: 0, alignSelf: 'flex-end', padding: '10px 15px', background: ' rgb(202, 86, 86)' }}
                                onClick={() => deleteTodo(el.id)}>Delete</button>
                            <h3>TODO {index + 1}</h3>
                            <li><b>Task :</b> {el.title}</li>
                            <li><b>Status :</b> {el.status}</li>
                            {el.status == 'incomplete' && <button onClick={() => complete(index)}>Completed</button>}
                            {el.status != 'incomplete' && <button className="EditButton">Edit Task</button>}
                        </div>
                    )
                })}
            </div>}
            {add && <div>
                <button className="addTodo" onClick={() => doneAdding()}>Done</button>
                <div className="todoWrapper">
                    <div className="todoItemsAdd">
                        <h3>Add your new Todo</h3>
                        <div className="formGroup">
                            <label>Enter your todo task</label>
                            <input type="text" onChange={(e) => setNewTodo(e.target.value)} value={newTodo} />
                        </div>
                        <button onClick={() => addedTodo()}>Submit</button>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default TodoList
