import React, { useState } from 'react'
import './Login.css'
import LocalStorageService from './services/localStorageService'
import axios from './config/axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const sendUser = (username, password) => {
        axios.post('http://localhost:8000/users/login', { username, password }).then(res => {
            LocalStorageService.setToken(res.data.token)
            LocalStorageService.setId(res.data.id)
            toast.success('Successfully logged in', { position: toast.POSITION.RIGHT, autoClose: false })
            setUsername('')
            setPassword('')
            window.location.replace('/profile')
        }).catch(() => {
            toast.error('Incorrect username or password', { position: toast.POSITION.RIGHT, autoClose: false })
        })

    }
    return (
        <div className="outerLogin">
            <div className="login">
                <h3>Login</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)}
                        value={username} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="button-group">
                    <button onClick={() => sendUser(username, password)}>Submit</button>
                    <button onClick={() => window.location.replace('/register')}>Register</button>
                </div>

            </div>
        </div>
    )
}

export default Login
