




// default states






store.subscribe(()=>{
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses)
})



const expenseOne = store.dispatch(addExpense({description:'rent',amount:100,createdAt:-1000}));
const expenseTwo = store.dispatch(addExpense({description:'coffee',amount:200,createdAt:1000}));


// const expenseThree = store.dispatch(addExpense({description:'food',amount:50}));

// store.dispatch(removeExpense({id:expenseOne.expense.id}));
// store.dispatch(removeExpense({id:expenseThree.expense.id}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
store.dispatch(sortByAmount());


// store.dispatch(editExpense(expenseTwo.expense.id,{amount:500}));

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// store.dispatch(setEndDate());
const demoState={
    expenses:[{
        id: 'laskdjf',
        description: 'January Rent',
        note: 'payment for address',
        amount: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy: 'amount',// date or amount,
        startDate: undefined,
        endDate: undefined
    }
}
