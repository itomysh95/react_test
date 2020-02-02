import React from 'react';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'
// jest.mock('../__mocks__/moment.js')
import moment from 'moment'

test('should render ExpenseForm correctly',()=>{
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

// test('should render ExpenseForm correctly with expense data',()=>{
//     const wrapper = shallow(<ExpenseForm {...expenses[1]}/>)
//     expect(wrapper).toMatchSnapshot()
// })

test('should render error for invalid form submission',()=>{
    const wrapper = shallow(<ExpenseForm />);
    // before the form is submited, should be default error state,
    // ie no error message, length of 0
    expect(wrapper).toMatchSnapshot();
    // simulate the event being passed to onSubmit for browser.prevent default
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{

        }
    });
    // after the invalid form submission, we expect state of the error
    // to not be undefined/length exists
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change',()=>{
    const value = 'New Description'
    const wrapper = shallow(<ExpenseForm />);
    // selec the input tag, the first input tag (0) and simulate a change=>
    // triggers onChange => onDescriptionChange, set the target.value 
    wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    // state of expenseForm ( the wrapper ) of description to be value
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change',()=>{
    const value = "New Note input"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change',{
        target:{value}
    })
    expect(wrapper.state('note')).toBe(value)
})


test('should set amount if valid input',()=>{
    const value = "23.50"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})

test('should set amount if valid input',()=>{
    const value = "45.444"
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    // standard render, but pass the spy in as onSubmit will call this.props.onSubmit so we need
    // to pass an onSubmit prop
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    // simulate form submission and prevent default
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{

        }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt,
        note: expenses[0].note
    });
})

test('should set a new date on date change',()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    // go to SingleDatePicker tag, go to prop onDateChange, pass moment()
    // in as parameter
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('should set calender focus onChange',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm />)
    // go to SingleDatePicker tag, go to prop onFocusChange, pass focused
    // in as parameter
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused)
})