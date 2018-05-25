import {connect} from 'react-redux';

import MailDetailComponent from '../../Components/Messages/MailDetail.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const MailDetailContainer = connect(mapStateToProps, mapDispatchToProps)(MailDetailComponent);
export default MailDetailContainer;