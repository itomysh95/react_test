import { addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('should setup remove expense action object',()=>{
    const action = removeExpense({id:'123abc'})
    // objects or arrays => toEqual, booleans or numbers => toBe=> checks if objects
    // are the exact same
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should add a note: "New note value"',()=>{
    const action = editExpense('123abc',{note:"New note value"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates:{
            note: "New note value"
        }
    })
})

test('should set up add expense action object with provided values',()=>{
    const expenseData = {
        description:'rent',
        amount:109500,
        createdAt: 1000,
        note: 'This was last months rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            // can be anything as long as type is string
            id: expect.any(String)
        }
    })
})

test('should setup add expense action object with default values',()=>{
    const expenseData = {
        description:'',
        note:'',
        amount:0,
        createdAt:0
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            ...expenseData,
            id: expect.any(String)
        }
    })
})