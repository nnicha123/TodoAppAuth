import React, { Component } from 'react'
import TodoList from './TodoList'
import axios from './config/axios'
import Login from './Login'
import Nav from './Nav'
import { BrowserRouter as Router, NavLink, Redirect, BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import User from './User'

export class App extends Component {
  state = {
    todo: []
  }
  componentDidMount = () => {
    // axios.get('http://localhost:8000/todos/').then(res => console.log(res.data))
  }
  render() {
    return (
      <div>
        <Nav />
        <Router className="router">
          <Route exact path='/' component={Login} />
          <Route exact path='/profile' component={User} />
          <Route exact path='/todo' component={TodoList}/>
        </Router>

      </div>
    )
  }
}

export default App
