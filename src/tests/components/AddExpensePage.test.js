import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'


let addExpense,history,wrapper;

beforeEach(()=>{
    // spys to pass in
    addExpense = jest.fn();
    history = {push: jest.fn()};
    // render add expense page with spy functions to pass in
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})


test('should render AddExpensePage correctly',()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle addExpense',()=>{
     // pass in expenses into on submit parameter
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})