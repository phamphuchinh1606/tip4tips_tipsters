import { fork } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './LoginSaga';
import {
    watchFetchLeads, watchFetchRegions, watchFetchProducts, watchFetchLeadDetail,
    watchFetchLeadLoadCreate, watchLeadCreate, watchFetchLeadLoadUpdate, watchLeadDelete,
    watchLeadUpdate, watchFetchRecentStatusLeads
} from './LeadSaga';

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchLogout),

        //leads
        fork(watchFetchLeads),
        fork(watchFetchRegions),
        fork(watchFetchProducts),
        fork(watchFetchLeadDetail),
        fork(watchFetchLeadLoadCreate),
        fork(watchLeadCreate),
        fork(watchLeadUpdate),
        fork(watchFetchLeadLoadUpdate),
        fork(watchLeadDelete),
        fork(watchFetchRecentStatusLeads)
    ];
}