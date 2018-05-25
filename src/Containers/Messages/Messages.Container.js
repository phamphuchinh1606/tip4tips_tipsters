import {connect} from 'react-redux';

import MessagesComponent from '../../Components/Messages/Messages.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesComponent);
export default MessagesContainer;