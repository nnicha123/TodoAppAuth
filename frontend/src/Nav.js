import React from 'react'
import './Nav.css'

function Nav() {
    return (
        <nav>
            <li onClick={() => window.location.replace('/profile')}>Home</li>
        </nav>
    )
}

export default Nav
