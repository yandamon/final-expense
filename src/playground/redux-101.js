import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1} = {}) => ({
    type:'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type:'DECREMENT',
    decrementBy
});

const setCount = ({count}) => ({
    type:'SET',
    count
});

const resetCount = () => ({
    type:'RESET',
})

const store = createStore ((state = {count:0},action) => {
    switch (action.type){
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count :action.count
        };
        case 'RESET':
        return {
            count: 0
        };
        default:
        return state;
    }
})

const unsuscrible = store.subscribe(()=>{
    console.log(store.getState());
})





store.dispatch(incrementCount({incrementBy:15}));
store.dispatch(decrementCount({decrementBy:10}));
store.dispatch(setCount({
    count:10
}));
store.dispatch(resetCount());


const user = {
    name:'Damon',
    age:24
}
console.log({...user,location:'Melbourne',age:22})