import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expense.js'

// regular unconnected component
export const ExpenseList = (props)=>(
    <div>
    {
        props.expenses.length === 0 ?(
            <p> No Expenses</p>
        ):(
            props.expenses.map((expense)=>{
                return <ExpenseListItem key={expense.id} {...expense}/>
            })
        )
    }
    </div>
)

// as the store changes, this will automatically rerun to rerender
const mapStateToProps = (state)=>{
    // return what information from the store we want our component to be able
    // to access
    return{
        expenses: selectExpenses(state.expenses,state.filters)
    }
}

// call to connect that pulls it all together
export default connect(mapStateToProps)(ExpenseList);
