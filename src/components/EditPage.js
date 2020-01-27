import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

const EditPage =(props)=>{
    return(
        <div>
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense)=>{
                props.dispatch(editExpense(props.expense.id,expense));
                props.history.push('/')
            }}
            />
            <button onClick={()=>{
                const id = props.expense.id
                props.dispatch(removeExpense({ id }));
                props.history.push('/');
            }}>Remove
            </button>
        </div>
    )
    
}

// access the current props that are passed through to the component EditPage
// and manipulate the props
const mapStateToProps = (state, props)=>{
    // look for the correct item by id, then return
    return{
        expense: state.expenses.find((expense)=>expense.id===props.match.params.id)
    }
}

// react router renders the higher order component, higher order component
// passe props through to EditPage component
export default connect(mapStateToProps)(EditPage);