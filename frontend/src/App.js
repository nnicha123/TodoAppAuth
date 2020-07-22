import React from 'react'
import TodoList from './TodoList'
import Login from './Login'
import Nav from './Nav'
import { BrowserRouter as Router } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import User from './User'
import Register from './Register'

function App() {
  return (
    <div>
      <Nav />
      <Router className="router">
        <Route exact path='/' component={Login} />
        <Route exact path='/profile' component={User} />
        <Route exact path='/todo' component={TodoList} />
        <Route exact path='/register' component={Register} />
      </Router>
    </div>
  )
}

export default App
