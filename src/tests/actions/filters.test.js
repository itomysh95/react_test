import {setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate,
    setTextFilter} from '../../actions/filters.js'

import moment from 'moment'

test('should generate set start date action object',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object',()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set sortByDate',()=>{
    const action = sortByDate(moment(0))
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate set sort by amount',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate setTextFilter action object',()=>{
    const action = setTextFilter('testing');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'testing'
    })
})

test('should generate setTextFilter action object',()=>{
    const action =setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})