import React from 'react'
import { NavLink } from 'react-router-dom'


function Header() {
    return (
        <div className='header'>
            <ul>
                <li>
                    <NavLink to="/">React Formik</NavLink>
                </li>
                <li>
                    <NavLink to="/hook">React Hook Form</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header