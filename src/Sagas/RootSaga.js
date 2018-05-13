import {fork} from 'redux-saga/effects';
import {watchLogin, watchLogout} from './LoginSaga';

export default function* rootSaga(){
    yield [
        fork(watchLogin),
        fork(watchLogout)
    ];
}