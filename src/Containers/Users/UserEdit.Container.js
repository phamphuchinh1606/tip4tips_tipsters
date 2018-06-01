import {connect} from 'react-redux';

import UserEditComponent from '../../Components/Users/UserEdit.Component';
import * as action from '../../Actions/index';

const mapStateToProps = (state) => {
    return{
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

const UserEditContainer = connect(mapStateToProps, mapDispatchToProps)(UserEditComponent);
export default UserEditContainer;