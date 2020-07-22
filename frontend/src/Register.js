import React,{useState} from 'react'
import './Register.css'
import axios from './config/axios'

function Register() {
    const [first_name,setFirstName] = useState('')
    const [last_name,setLastName] = useState('')
    const [age,setAge] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const registerUser = () => {
        axios.post('http://localhost:8000/users/register',{first_name,last_name,age,username,password}).then(res => {
            window.location.replace('/')
        })
    }

    return (
        <div className="outerRegister">
            <div className="innerRegister">
                <h3>Register</h3>
                <div className="registerNames">
                    <div className="registerForm">
                        <label>First name</label>
                        <input type="text" onChange={(e) => setFirstName(e.target.value)} value={first_name}/>
                    </div>
                    <div className="registerForm">
                        <label>Last name</label>
                        <input type="text" onChange={(e) => setLastName(e.target.value)} value={last_name}/>
                    </div>
                </div>
                <div className="registerForm">
                    <label>Age</label>
                    <input type="text" onChange={(e) => setAge(e.target.value)} value={age}/>
                </div>
                <div className="registerForm">
                    <label>Username</label>
                    <input type="text" onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                <div className="registerForm">
                    <label>Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </div>
                <button onClick={() => registerUser()}>Submit</button>
            </div>
        </div>
    )
}

export default Register
