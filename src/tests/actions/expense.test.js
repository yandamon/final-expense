
import {addExpense,editExpense,removeExpense} from '../../actions/expenses';

test('Should setup remove expense action object',()=>{
    const action = removeExpense({id:'123'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })
});


test('Edit the object',()=>{
    const action = editExpense('1234',{note:'new note'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'1234',
        updates:{note:'new note'}
    })
});