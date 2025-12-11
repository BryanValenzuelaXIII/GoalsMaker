import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {logIn} from '../utils/backendCall'

function* fetchUser(action){
    try{
        yield put({
        type: 'user/onUserLoading'
    });
    const {email, password} = action.payload;
    const user = yield call (logIn, email, password);
    yield put({
        type: 'user/onUserFetch',
        payload: user.data,
    });
    } catch(e){
        yield put({
            type: 'user/onUserFail',
            payload: e.message,
        })
    }
    
}

function* mySaga(){
    yield takeLatest('USER_FETCH_REQUEST', fetchUser)
}

export default mySaga;