import React from 'react';
import {connect} from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate,setEndDate } from '../actions/filters';



export class ExpenseListFilters extends React.Component{
    state ={
        calenderFocused: null
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.setEndDate(endDate)
        this.props.setStartDate(startDate)
    }
    onFocusChange = (calenderFocused)=>{
        this.setState(()=>({calenderFocused}))
    }

    onTextChange=(event)=>{
        this.props.setTextFilter(event.target.value);
    }

    onSortChange=(event)=>{
        if(event.target.value==="date"){
            this.props.sortByDate();
        }else if(event.target.value==="amount"){
            this.props.sortByAmount();
        }
    }
    render(){
        return(
            <div>
            <input type="text" 
                defaultValue={this.props.filters.text} 
                onChange={this.onTextChange}>
            </input>
            <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
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
const mapStateToProps = (state)=>({filters: state.filters})

const mapDispatchToProps = (dispatch)=>({
    setTextFilter: (text)=> dispatch(setTextFilter(text)),
    sortByDate: ()=> dispatch(sortByDate()),
    sortByAmount:()=> dispatch(sortByAmount()),
    setEndDate:(endDate)=> dispatch(setEndDate(endDate)),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate))
})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)
