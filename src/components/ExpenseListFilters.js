import React from 'react';
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate } from '../actions/filters';



class ExpenseListFilters extends React.Component{
    state ={
        calenderFocused: null
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.dispatch(setEndDate(endDate))
        this.props.dispatch(setStartDate(startDate))
    }
    onFocusChange = (calenderFocused)=>{
        this.setState(()=>({calenderFocused}))
    }
    render(){
        return(
            <div>
            <input type="text" defaultValue={this.props.filters.text} onChange={(event)=>{
                this.props.dispatch(setTextFilter(event.target.value))
            }}></input>
            <select value={this.props.filters.sortBy} onChange={(event)=>{
                if(event.target.value==="date"){
                    this.props.dispatch(sortByDate())
                }else if(event.target.value==="amount"){
                    this.props.dispatch(sortByAmount())
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker 
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput = {this.state.calenderFocused}
                onFocusChange = {this.onFocusChange}
                numberOfMonths={1}
                isOutsideRange={()=>false}
                showClearDates={true}
            />
        </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters)
