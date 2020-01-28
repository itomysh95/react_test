import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props)
        // if expense is passed down (came from edit expense), if it
        // is nto passed down (came from create expense)
        this.state={
            description:props.expense?props.expense.description:'',
            note:props.expense?props.expense.note:'',
            // props.expense.amount is stored as a string in cents,
            // so we to string it and convert it to dollars
            amount:props.expense?(props.expense.amount/100).toString():'',
            // either take the current moment ( creating a new expense)
            // or take the moment of the original create time( edit expense)
            createdAt: props.expense?moment(props.expense.createdAt):moment(),
            calenderFocusued: false,
            error: ''
        }
    }

    // listen to the description input
    onDescriptionChange=(event)=>{
        const description = event.target.value;
        this.setState(()=>({description}))
    }

    // listen to the note input
    onNoteChange=(event)=>{
        const note = event.target.value;
        this.setState(()=>({note}))
    }

    // listen to the amount input
    onAmountChange=(event)=>{
        const amount=event.target.value;
        // if there is no amount OR starts with a number, any amount of number,optional . and a 0 to 2 numbers ane ends there
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}))
        }
    }

    // when the user selects a date change the 1d at date
    onDateChange=(createdAt)=>{
        this.setState(()=>({createdAt}))
    }


    onFocusChange=({focused})=>{
        // if there is a value then we change it, if there is no
        // value in createdAt we leave the current date as is
        if(this.state.createdAt){
            this.setState(()=>({calenderFocusued:focused}))
        }
    }

    onSubmit=(event)=>{
        // stop the full page refresh
        event.preventDefault()
        // if no values were provided
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error: 'Please provide description and amount'
            }))
            console.log('erorr message')
        // else call onSubmit
        }else{
            this.setState(()=>({
                error:''
            }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>Error message</p>}
                <form onSubmit={this.onSubmit}>
                    <input 
                    type="text" 
                    placeholder="Description" 
                    autoFocus 
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                    />
                    <input 
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                     date={this.state.createdAt}
                     onDateChange={this.onDateChange}
                     focused={this.state.calenderFocusued}
                     onFocusChange={this.onFocusChange}
                     numberOfMonths={1}
                     isOutsideRange={()=> false}
                    />
                    <textarea
                    placeholder="Add a note for your expense (optional)"
                    value={this.state.note}
                    onChange={this.onNoteChange}
                    >
                    </textarea>
                    <button> Add Expense</button>
                </form>
            </div>
        )
    }
}