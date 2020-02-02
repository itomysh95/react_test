const getExpensesTotal = require('../../selectors/expense-total')
const expenses = require('../fixtures/expenses.js')

test('should return 0 if no expenses',()=>{
    const res = getExpensesTotal([])
    expect(res).toEqual('$0.00')
})

test('should correctly add up a single expense',()=>{
    const res = getExpensesTotal([expenses[0]])
    expect(res).toEqual('$1.95')
})


test('should correctly add up multiple expenses',()=>{
    const res = getExpensesTotal(expenses)
    expect(res).toEqual('$1,141.95')
})
