import React from 'react'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import numeral from 'numeral'


const ExpenseListItem=({id,description,amount,createdAt})=>(
    <div>
       <NavLink to={`/edit/${id}`} exact={true} >
        <h3>
            {description}
        </h3>
       </NavLink>
       <p>
        {numeral(amount/100).format('$0,0.00')}
        - 
        {moment(createdAt).format('MMMM Do, YYYY')}
       </p>
    </div>
)


export default ExpenseListItem