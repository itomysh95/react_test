import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters'


export default()=>{
    const store=createStore(
        // combines reducers.. 
        combineReducers({
            // key:value => root state name:Reducer that manages
            expenses: expensesReducer,
            filters:filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}