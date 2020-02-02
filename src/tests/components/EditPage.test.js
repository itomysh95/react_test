import React from 'react';
import {shallow} from 'enzyme';
import {EditPage} from '../../components/EditPage'
import expenses from '../fixtures/expenses'


let editExpense,removeExpense,history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push: jest.fn()}
    // passing in props because shallow render, passing in "fake functions" to replace
    // the functions that are suppose to be imported in EditPage 
    wrapper = shallow(<EditPage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        expense={expenses[0]}
        history={history}
        />)
})

test('should render EditPage',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpenses',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id,expenses[0])
})

test('should handle removeExpenses',()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith({id: expenses[0].id})
})