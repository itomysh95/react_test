import React from 'react'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


const ExpenseListItem=({id,description,amount,createdAt})=>(
    <div>
       <NavLink to={`/edit/${id}`} exact={true} >
        <h3>
            {description}
        </h3>
       </NavLink>
       <p>{amount}-{createdAt}</p>
    </div>
)


// gives access to dispatch 
export default connect()(ExpenseListItem);