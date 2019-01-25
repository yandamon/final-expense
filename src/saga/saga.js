import {select,all,put,takeEvery} from 'redux-saga/effects';
import database from '../firebase/firebase';
import {addExpense} from '../actions/expenses';

export default function* rootSaga(){
    yield all([sagaAddExpense()])
}

const getId = state =>state.auth.uid


export function* addToFireBase(expense){
    const uid = yield select(getId)
    const key = yield database.ref(`users/${uid}/expenses`).push(expense.expenseData).key
    yield put(addExpense({key,...expense.expenseData}))
}

export function* sagaAddExpense(){
    yield takeEvery('START_ADD_EXPENSE',addToFireBase)
}



