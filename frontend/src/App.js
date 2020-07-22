import React, { Component } from 'react'
import TodoList from './TodoList'
import axios from './config/axios'
import Login from './Login'

export class App extends Component {
  state = {
    todo : []
  }
  componentDidMount = () => {
    // axios.get('http://localhost:8000/todos/').then(res => console.log(res.data))
  }
  render() {
    return (
      <div>
        <Login/>
        {/* <TodoList/> */}
      </div>
    )
  }
}

export default App
