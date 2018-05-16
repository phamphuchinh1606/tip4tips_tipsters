import { fork } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './LoginSaga';
import { watchFetchLeads, watchFetchRegions, watchFetchProducts, watchFetchLeadDetail } from './LeadSaga';

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchLogout),

        //leads
        fork(watchFetchLeads),
        fork(watchFetchRegions),
        fork(watchFetchProducts),
        fork(watchFetchLeadDetail)
    ];
}