// set the text description for object
const setTextFilter=(text='')=>({
    type: 'SET_TEXT_FILTER',
    text
})

// set the start date
const setStartDate=(startDate=undefined)=>({
    type: 'SET_START_DATE',
    startDate
})

// set the end date
const setEndDate=(endDate=undefined)=>({
    type: 'SET_END_DATE',
    endDate
})

const sortByDate=()=>({
    type: 'SORT_BY_DATE'
})

const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT'
})

export {setTextFilter,setStartDate,setEndDate,sortByDate,sortByAmount}
