import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo">
                <NavLink>Navbar</NavLink>
            </div>
            <div className="links">
                <NavLink to='/' style={
                    ({ isActive }) =>
                        ({ color: isActive ? 'red' : 'white' })}>
                    Home
                </NavLink>
                <NavLink to='/about' style={
                    ({ isActive }) =>
                        ({ color: isActive ? 'red' : 'white' })}>
                    About
                </NavLink>
                <NavLink to='/courses' style={
                    ({ isActive }) =>
                        ({ color: isActive ? 'red' : 'white' })}>
                    Courses
                </NavLink>
            </div>
        </div>
    )
}

export default Navbar
