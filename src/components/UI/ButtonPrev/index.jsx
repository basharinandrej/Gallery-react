import React from 'react'
import { NavLink } from 'react-router-dom'



const ButtonPrev = ({ children, to }) => {

    return(
        <NavLink to={to} className="app__link-prev">
            { children }
        </NavLink>
    )
}

export default ButtonPrev