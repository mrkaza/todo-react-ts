import {combineReducers} from 'redux';
import {authReducer} from '../modules/auth/index'

const rootReducer = combineReducers({
    auth:authReducer,
})

export default rootReducer;