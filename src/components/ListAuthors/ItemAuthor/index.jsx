import React from 'react'
import { NavLink } from 'react-router-dom'


export const ItemAuthor = ({ authors, onClick }) => {
    return  <NavLink   to={'album/' + authors.id + '/' + authors.username}
                       onClick={onClick}>
                <li>{authors.username}</li>
            </NavLink>
}