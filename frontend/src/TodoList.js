import React, { useEffect, useState } from 'react'
import axios from './config/axios'
import './TodoList.css'

function TodoList() {
    const [todo, setTodo] = useState([])
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
    return (
        <div className="todoWrapper">
            {todo.map((el, index) => {
                return (
                    <div className="todoItems" key={el.id}>
                        <h3>TODO {index + 1}</h3>
                        <li><b>Task :</b> {el.title}</li>
                        <li><b>Status :</b> {el.status}</li>
                        {el.status == 'incomplete' && <button onClick={() => complete(index)}>Completed</button>}
                        {el.status != 'incomplete' && <button className="EditButton">Edit Task</button>}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList
