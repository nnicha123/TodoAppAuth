import React from 'react'
import './Nav.css'
import LocalStorageService from './services/localStorageService'

function Nav() {
    const logout = () => {
        LocalStorageService.removeToken()
        LocalStorageService.removeId()
        window.location.replace('/')
    }
    return (
        <nav>
            <li onClick={() => window.location.replace('/profile')}>Home</li>
            <li onClick={() => logout()}>Logout</li>
        </nav>
    )
}

export default Nav
