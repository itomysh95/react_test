import expensesReducer from '../../reducers/expenses'
const expenses = require('../fixtures/expenses')


test('should set default state',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expenses if id is not found',()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('should add an expense',()=>{
    const expense = {
        id:'109',
        description:'laptop',
        note:'',
        createdAt:2000,
        amount:29500
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('should edit an expense',()=>{
    // const note = "this is a test"
    // const action={
    //     type:'EDIT_EXPEPNSE',
    //     id:expenses[1].id,
    //     updates:{
    //         note
    //     }
    // }
    const amount = 122000
    const action={
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state[1].amount).toBe(amount)})

test('should not edit expense if expense is not found',()=>{
    const note = "this is a test 2"
    const action={
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            note
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})