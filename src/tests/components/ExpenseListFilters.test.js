import React from 'react';
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import {filters, altFilters} from '../fixtures/filters'
import moment from 'moment';




let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn(),
    sortByDate = jest.fn(),
    sortByAmount = jest.fn(),
    setStartDate = jest.fn(),
    setEndDate = jest.fn(),
    wrapper = shallow(
        <ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    )
})

test('should render ExpenseListFilters correctly' , ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseListFilters with alt data correctly',()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle text change',()=>{
    const value = 'rent'
    // simulate a change on text input with a new value of rent
    wrapper.find('input').simulate('change',{
        target:{
            value
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('should sort by date',()=>{
    const value = "date"
    // default is sortByDate, so we change to sortByAmount then check
    // if changes to sortByDate
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('should sort by amount',()=>{
    const value = "amount"
    wrapper.find('select').simulate('change',{
        target:{
            value
        }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

test('should handle date changes',()=>{
    const startDate = moment(0)
    const endDate = moment(0).add(3,'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate,
        endDate
    })
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
})

test('should handle date focus changes',()=>{
    const calenderFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})

