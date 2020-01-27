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
    const action = editExpense({note:"New note value"})
    expect(action).toEqual({
        
    })
})