import {createStore} from 'redux';

const incrementCount = ({incrementBy=1}={})=>({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount=({decrementBy=1}={})=>({
    type:'DECREMENT',
    decrementBy
})

const resetCount=()=>({
    type: 'RESET'
})

const setCount=({count}={})=>({
    type:'SET',
    count
}) 


// Reducers
// Reducers are pure functions, do not interact outside the function
// never change state or action

const countReducer=((state={count:0},action)=>{
    switch (action.type){
        case 'INCREMENT':
            return{
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            return{
                count: state.count-action.decrementBy
            }
        case 'RESET':
            return{
                count: 0
            }
        case 'SET':
            return{
                count:action.count
            }
        default:
            return state;
    }
})

// reads tasks?
const store = createStore(countReducer)
// notifies of any changes?
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy:5}))
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy:5}))
store.dispatch(resetCount())
store.dispatch(setCount({count:101}))