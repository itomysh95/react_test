import {NavLink} from 'react-router-dom'
import React from 'react'

const Header= ()=>( 
    <header>
        <h1>Expensify</h1>
        <NavLink to='/create' exact={true} activeClassName="is-active">Create</NavLink>
        <NavLink to='/help' exact={true} activeClassName="is-active">help</NavLink>
        <NavLink to='/' exact={true} activeClassName="is-active">Home</NavLink>
    </header>
)

export default Header;