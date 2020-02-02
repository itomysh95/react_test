const numeral = require('numeral')

const getExpenseTotal=(expenses)=>{
    // if there is no expense
    if(expenses.length===0){
        return numeral(0).format('$0,0.00')
    }else{
        // get the amount from every expense,
        // cumulate the amount up
        const value = expenses.map((expense)=>expense.amount).reduce((accumulator,currentValue)=>accumulator+currentValue,0)
        // numeral format
        return numeral(value/100).format('$0,0.00')
    }
}

module.exports = getExpenseTotal;