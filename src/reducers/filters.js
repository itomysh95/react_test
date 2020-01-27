import moment from 'moment'


const filtersReducerDefaultState={
    text:'',
    sortBy:'date',
    // set the user's view of dates to start/end of current month
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
}

const filtersReducer = (state = filtersReducerDefaultState, action)=>{
    switch(action.type){
        case 'SET_TEXT_FILTER':
            // create a new object and spread prev state 
            // b/c don't want to change prev state
            return {
                ...state,
                text:action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy:'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    }
}

export default filtersReducer