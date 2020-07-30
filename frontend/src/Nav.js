import React from 'react'
import './Nav.css'
import LocalStorageService from './services/localStorageService'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Nav() {
    const logout = () => {
        LocalStorageService.removeToken()
        LocalStorageService.removeId()
        toast.info('You are now logged out', { position: toast.POSITION.RIGHT, autoClose: false })
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
