import React, { useEffect, useState } from 'react'
import axios from './config/axios'
import LocalStorageService from './services/localStorageService'
import './User.css'

function User() {
    const [user, setUser] = useState({ first_name: '', last_name: '', age: 0 })
    useEffect(() => {
        axios.get('http://localhost:8000/users/' + LocalStorageService.getId()).then(res => {
            const { first_name, last_name, age } = res.data
            setUser({ first_name, last_name, age })
        })
    }, [])
    const logout = () => {
        LocalStorageService.removeToken()
        LocalStorageService.removeId()
        window.location.replace('/')
    }
    return (
        <div className="userOuter">
            <div className="informationCard">
                <h3>User information</h3>
                <li>First name : {user.first_name}</li>
                <li> Last name : {user.last_name}</li>
                <li> Age : {user.age}</li>
                <button onClick={() => window.location.replace('/todo')}>Todos</button>
                <button onClick={() => logout()}>Switch User</button>
            </div>
        </div>
    )
}

export default User
