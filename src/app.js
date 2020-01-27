import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import './styles/styles.scss';
import 'normalize.css/normalize.css';
import {Provider} from 'react-redux'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters.js'
import getVisibleExpenses from './selectors/expense';

const store = configureStore();
store.dispatch(addExpense({description:'waterbill',amount:4500}))
store.dispatch(addExpense({description:'gasbill',amount:300,createdAt:1000}))
store.dispatch(addExpense({description:'rent',amount:1500}))

const state = store.getState()
const getVisibleExpense = getVisibleExpenses(state.expenses,state.filters)
console.log(getVisibleExpense)


// provider connects to store? connect connects to provider?
const jsx=(
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'));
