import { fork } from 'redux-saga/effects';
import { watchLogin, watchLogout } from './LoginSaga';
import {
    watchFetchLeads, watchFetchRegions,watchFetchTipsters, watchFetchProducts, watchFetchLeadDetail,
    watchFetchLeadLoadCreate, watchLeadCreate, watchFetchLeadLoadUpdate, watchLeadDelete,
    watchLeadUpdate, watchFetchRecentStatusLeads
} from './LeadSaga';
import {watchMessageNewFetch, watchMessageAllFetch, watchMessageDetailFetch} from './MessageSaga';

export default function* rootSaga() {
    yield [
        fork(watchLogin),
        fork(watchLogout),

        //leads
        fork(watchFetchLeads),
        fork(watchFetchRegions),
        fork(watchFetchTipsters),
        fork(watchFetchProducts),
        fork(watchFetchLeadDetail),
        fork(watchFetchLeadLoadCreate),
        fork(watchLeadCreate),
        fork(watchLeadUpdate),
        fork(watchFetchLeadLoadUpdate),
        fork(watchLeadDelete),
        fork(watchFetchRecentStatusLeads),

        //messages
        fork(watchMessageNewFetch),
        fork(watchMessageAllFetch),
        fork(watchMessageDetailFetch)
    ];
}