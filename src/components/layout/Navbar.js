import React from 'react'
import { Link } from 'react-router-dom'
import SignInLinks from './SignInLinks'
import SignOutLinks from './SignOutLinks'
import './Title.css'

const Navbar = () => {
    return (
       <nav className="nav-wrapper grey darken-3">
           <div className="container">
                <Link to='/' className="brand-logo" className="covid">Covid-19</Link>
                <SignInLinks />
                <SignOutLinks />
           </div>
       </nav>

    )
}

export default Navbar