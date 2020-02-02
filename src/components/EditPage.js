import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses';

export class EditPage extends React.Component{
    // inline functions will have to render everytime called?
    onSubmit =(expense)=>{
        this.props.editExpense(this.props.expense.id,expense);
        this.props.history.push('/')
    }
    onRemove = ()=>{
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }

    render(){
        return(
            <div>
                <ExpenseForm 
                expense={this.props.expense}
                onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                    Remove
                </button>
            </div>
        )
    }
}


// access the current props that are passed through to the component EditPage
// and manipulate the props
const mapStateToProps = (state, props)=>({
    // look for the correct item by id, then return
    expense: state.expenses.find((expense)=>expense.id===props.match.params.id)
})

const mapDispatchToProps = (dispatch,props)=>({
        editExpense: (id,expense)=>dispatch(editExpense(id,expense)),
        removeExpense: (data)=> dispatch(removeExpense(data))
})

// react router renders the higher order component, higher order component
// passe props through to EditPage component
export default connect(mapStateToProps,mapDispatchToProps)(EditPage);