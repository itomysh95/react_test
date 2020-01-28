const expensesReducerDefaultState=[]

const expensesReducer = (state=expensesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            // we don't want to push, because that would modify the original 
            // state, so we concat, which joins the two arrays returning a new
            // array?
            return [
                ...state, action.expense
            ]
            /// remove the expense where the id matches the id passed in
        case 'REMOVE_EXPENSE':
            // filter removes a new array, does not modify state, we want the id from state
            // => {id}
            return state.filter(({id})=>{
                return id!==action.id
            })
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            })
        default:
            return state;
    }
}

export default expensesReducer